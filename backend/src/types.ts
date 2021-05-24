import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Mon {
  @Field()
  mid: number

  @Field()
  style: number

  @Field()
  name: string

  @Field()
  styleName?: string

  @Field(() => [String])
  sexes: string[]

  @Field(() => String)
  class?: string

  @Field(() => [String])
  types: string[]

  @Field()
  height: number

  @Field()
  weight: number

  @Field(() => [Characteristic])
  characteristics: Characteristic[]

  @Field()
  hp: number

  @Field()
  atk: number

  @Field()
  def: number

  @Field()
  satk: number

  @Field()
  sdef: number

  @Field()
  agi: number

  @Field(() => [String])
  descriptions: string[]

  // NOTE: Mon をそのまま再利用するとリゾルバが無限ループするので、簡易情報に留める
  // TODO: anotherStyle でも同じことを考えると、型名は変えたほうが良さそうだ
  @Field(() => [Evolution])
  evolutions: Evolution[]

  @Field(() => [Number])
  anotherStyles: number[]
}

@ObjectType()
export class Characteristic {
  @Field()
  name: string

  @Field()
  description: string
}

@ObjectType()
export class Evolution {
  @Field()
  mid: number

  @Field()
  name: string

  @Field(() => [String])
  types: string[]
}
