Page({
  data: {
    noPetShow: false,
    detail: {
      petName: '小叮当',
      pid: '12195',
      avatar: '/image/defaultHeader.png',
      sex: 2,
      breed: '暹罗猫',
      age: 2.1,
      fans: 1995,
      like: 1002,
      diaryNum: 82,
      brand: '平安喜乐',
      diary: [{
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3796346064,2650137893&fm=26&gp=0.jpg',
        num: 100
      }, {
        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1802567280,1513906092&fm=26&gp=0.jpg',
        num: 62
      }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1897043525,3838619299&fm=26&gp=0.jpg',
        num: 116
      }, {
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=783672424,2094359796&fm=26&gp=0.jpg',
        num: 25
      }, {
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3897858489,1088539560&fm=26&gp=0.jpg',
        num: 36
      }, {
        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=948326042,3633577358&fm=26&gp=0.jpghttps://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=948326042,3633577358&fm=26&gp=0.jpg',
        num: 17
      }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3046394105,2670877099&fm=26&gp=0.jpg',
        num: 13
      }, {
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1402599798,3725659154&fm=26&gp=0.jpg',
        num: 1
      }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2819432721,3706709001&fm=26&gp=0.jpg',
        num: 6
      }, {
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2516366336,2245247833&fm=26&gp=0.jpg',
        num: 24
      }]
    }
  },

  // 关闭无数据指示框
  closeNoPet() {
    this.setData({
      noPetShow: false
    })
  }
})
