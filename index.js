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