const app = new Vue({
  el: '#vue',
  data: {
    message: "hello vue"
  }
})

const app2 = new Vue({
  el: '#vue2',
  data: {
    columns: ["活動名","日","月","火","水","木","金","土"],
    rows: [
      {
        title: "Unitus",
        data: [1,2,2,2,2,2,1]
      },
      {
        title: "a-jump!",
        data: [0,2,0,0,2,0,0]
      },
      {
        title: "EIC",
        data: [0,0,0,0,2,0,0]
      }
    ]
  },
  filters: {
    toIcon(val) {
      switch (val) {
        case 0:
          return '-'
        case 1:
          return '△'
        case 2:
          return '◯'
      }
    }
  }
})

const app3 = new Vue({
  el: '#vue3',
  data: {
    history: [
      {
        date: 1999,
        content: "東京都の西の方に生まれる"
      },{
        date: 2006,
        content: "東京都の西の方の小学校に入学"
      },{
        date: 2012,
        content: "中学受験を経て、埼玉の下の方にある大学附属中学校に入学"
      },{
        date: 2015,
        content: "そのまま高校に進学"
      },{
        date: 2018,
        content: "東京理科大学に入学"
      }
    ]
  }
})