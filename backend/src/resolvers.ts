import { Query, Resolver, Arg } from 'type-graphql'
import { Mon, Characteristic, Evolution } from './types'
import { mons, sex, styleName, clazz, type, characteristic } from './db'

@Resolver(Mon)
export class MonResolver {

  /**
   * モン達を返す
   */
  @Query(() => [Mon])
  mons() {
    return mons.map(mon => genMon(mon))
  }

  /**
   * モンを返す
   */
  @Query(() => Mon, { nullable: true })
  mon(
    @Arg('mid') mid: number,
    @Arg('style', { nullable: true, defaultValue: 0 }) style: number
  ) {
    const m = mons.find(m => m.mid === mid && m.style === style)
    return m ? genMon(m) : null
  }
}

/**
 * モンを生成する
 */
// TODO: 今はゴリゴリやってるけど、最終的には OR マッパーを使う
const genMon = (mon: typeof mons[0]): Mon => {
  const m = new Mon()
  m.mid = mon.mid
  m.style = mon.style
  m.name = mon.name
  m.styleName = styleName.find(s => s.sid === mon.styleName)?.name
  m.sexes = mon.sexes.flatMap(s => sex.find(ss => ss.sid === s)?.name ?? [])
  m.class = clazz.find(c => c.cid === mon.class)?.name
  m.types = mon.types.flatMap(t => type.find(tt => tt.tid === t)?.name ?? [])
  m.height = mon.height
  m.weight = mon.weight
  m.characteristics = mon.characteristics.flatMap(c => {
    const character = characteristic.find(cc => cc.cid === c)
    if (character) {
      const ins = new Characteristic()
      ins.name = character.name
      ins.description = character.description
      return ins
    } else {
      return []
    }
  })
  m.hp = mon.hp
  m.atk = mon.atk
  m.def = mon.def
  m.satk = mon.satk
  m.sdef = mon.sdef
  m.agi = mon.agi
  m.descriptions = mon.descriptions
  m.evolutions = mon.evolutions.flatMap(e => {
    const emon = mons.find(mm => mm.mid === e)
    if (emon) {
      const evo = new Evolution()
      evo.mid = emon.mid
      evo.name = emon.name
      evo.types = emon.types.flatMap(t => type.find(tt => tt.tid === t)?.name ?? [])
      return evo
    } else {
      return []
    }
  })
  m.anotherStyles = mon.anotherStyles
  return m
}
