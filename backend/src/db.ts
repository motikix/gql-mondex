export const mons = [
  {
    mid: 1,
    sid: 0,
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
      'うまれて　しばらくの　あいだ　せなかの　タネに　つまった　えいようを　とって　そだつ。　（『ポケモン シールド』より）',
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [],
  },
  {
    mid: 2,
    sid: 0,
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
      'たいようの　ひかりを　あびるほど　からだに　ちからが　わいて　せなかの　つぼみが　そだっていく。　（『ポケモン シールド』より）',
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [],
  },
  {
    mid: 3,
    sid: 0,
    name: 'フシギバナ',
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
      'はなから　うっとりする　かおりが　ただよい　たたかうものの　きもちを　なだめてしまう。　（『ポケモン シールド』より）',
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [0, 1, 2],
  },
  {
    mid: 3,
    sid: 1,
    name: 'メガフシギバナ',
    sexes: [1, 2],
    class: 1,
    types: [1, 2],
    height: 2.4,
    weight: 155.5,
    characteristics: [2],
    hp: 5,
    atk: 6,
    def: 8,
    satk: 8,
    sdef: 8,
    agi: 5,
    descriptions: [
      'おおきな　はなびらを　ひろげたいようの　ひかりを　あびているとからだに　げんきが　みなぎっていく。　（『ポケモン Ｘ』より）',
      'あめの　ふった　よくじつは　せなかのはなの　かおりが　つよまる。　かおりにさそわれ　ポケモンが　あつまる。　（『ポケモン Ｙ』より）',
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [0, 1, 2],
  },
  {
    mid: 3,
    sid: 2,
    name: 'フシギバナ',
    sname: 'キョダイマックスのすがた',
    sexes: [1, 2],
    class: 0,
    types: [1, 2],
    height: 24.0,
    weight: -1,
    characteristics: [1],
    hp: 5,
    atk: 5,
    def: 5,
    satk: 6,
    sdef: 6,
    agi: 5,
    descriptions: [
      '２ほんの　ふとい　ツルを　ふりまわし　たたかう。　１０かいだての　ビルを　かるく　なぎたおすほど　パワフルだ。　（『ポケモン ソード』より）',
      'やまの　ふんかのような　いきおいで　ばらまく　たいりょうの　かふんは　すいこみすぎると　きを　うしなうぞ。　（『ポケモン シールド』より）'
    ],
    evolutions: [1, 2, 3],
    anotherStyles: [0, 1, 2],
  },
]

export const sex = [
  {
    id: 0,
    name: '不明',
  },
  {
    id: 1,
    name: 'オス',
  },
  {
    id: 2,
    name: 'メス',
  },
]

export const clazz = [
  {
    id: 0,
    name: '-',
  },
  {
    id: 1,
    name: 'たねポケモン',
  },
]

export const type = [
  {
    id: 1,
    name: 'くさ',
  },
  {
    id: 2,
    name: 'どく',
  },
]

export const characteristic = [
  {
    id: 1,
    name: 'しんりょく',
    description: 'ＨＰが　へったとき　くさタイプの　わざの　いりょくが　あがる。',
  },
  {
    id: 2,
    name: 'あついしぼう',
    description: 'あつい　しぼうで　まもられているので　ほのおタイプと　こおりタイプの　わざの　ダメージを　はんげんさせる。',
  },
]
