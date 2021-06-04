Page({
  data: {
    tabIndex: 0,
    tab: [{
        title: '私信',
        num: 0
      },
      {
        title: '评论',
        num: 0
      },
      {
        title: '云吸和赞',
        num: 10
      },
      {
        title: '系统通知',
        num: 0
      }
    ],
    list:[{
      img: '/image/defaultHeader.png',
      name: '小铲屎官',
      content: '请问下你的猫怎么领养啊？',
      time: '刚刚',
      num: 3
    },{
      img: '/image/defaultHeader.png',
      name: '可爱的爆米花儿',
      content: '很喜欢，请问领养需要什么条件？',
      time: '刚刚',
      num: 99
    }]
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  }
})
