export const mons = [
  {
    mid: 1,
    style: 0,
    name: 'フシギダネ',
    sexes: [1, 2],
    class: 1,
    types: [1, 2],
    height: 0.7,
    weight: 6.9,
    characteristics: [1],
    hp: 4,
    atk: 4,
    def: 4,
    satk: 5,
    sdef: 5,
    agi: 4,
    descriptions: [
      'うまれたときから　せなかに　しょくぶつの　タネが　あって　すこしずつ　おおきく　そだつ。　（『ポケモン ソード』より）',
      'うまれて　しばらくの　あいだ　せなかの　タネに　つまった　えいようを　とって　そだつ。　（『ポケモン シールド』より）'
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [],
  },
  {
    mid: 2,
    style: 0,
    name: 'フシギソウ',
    sexes: [1, 2],
    class: 1,
    types: [1, 2],
    height: 1.0,
    weight: 13.0,
    characteristics: [1],
    hp: 4,
    atk: 4,
    def: 4,
    satk: 5,
    sdef: 5,
    agi: 4,
    descriptions: [
      'せなかの　つぼみが　おおきく　そだってくると　２ほんあしで　たつことが　できなくなるらしい。　（『ポケモン ソード』より）',
      'たいようの　ひかりを　あびるほど　からだに　ちからが　わいて　せなかの　つぼみが　そだっていく。　（『ポケモン シールド』より）'
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [],
  },
  {
    mid: 3,
    style: 0,
    name: 'フシギバナ',
    styleName: 1,
    sexes: [1, 2],
    class: 1,
    types: [1, 2],
    height: 2.0,
    weight: 100.0,
    characteristics: [1],
    hp: 5,
    atk: 5,
    def: 5,
    satk: 6,
    sdef: 6,
    agi: 5,
    descriptions: [
      'たいようエネルギーを　えいようにして　おおきなハナが　ひらく。　ひなたに　ひきよせられるように　いどうする。　（『ポケモン ソード』より）',
      'はなから　うっとりする　かおりが　ただよい　たたかうものの　きもちを　なだめてしまう。　（『ポケモン シールド』より）'
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [0, 1, 2],
  },
]

export const sex = [
  {
    sid: 0,
    name: '不明',
  },
  {
    sid: 1,
    name: 'オス',
  },
  {
    sid: 2,
    name: 'メス',
  }
]

export const clazz = [
  {
    cid: 1,
    name: 'たねポケモン',
  },
]

export const type = [
  {
    tid: 1,
    name: 'くさ',
  },
  {
    tid: 2,
    name: 'どく',
  },
]

export const characteristic = [
  {
    cid: 1,
    name: 'しんりょく',
    description: 'ＨＰが　へったとき　くさタイプの　わざの　いりょくが　あがる。',
  },
]

export const styleName = [
  {
    sid: 1,
    name: 'キョダイマックスのすがた',
  }
]
