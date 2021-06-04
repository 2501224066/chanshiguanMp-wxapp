const App = getApp();

Page({
  data: {
    swiperIndex: 0,
    swiper: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3094225798,1628049369&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322487484,1813825588&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3094225798,1628049369&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322487484,1813825588&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3094225798,1628049369&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322487484,1813825588&fm=26&gp=0.jpg',
    ],
    iphoneFooter: false,
    commentTypeIndex: 0,
    commentType: ['热评', '最新'],
    comment: [{
      header: '/image/defaultHeader.png',
      name: '酷酷马鹿',
      time: '8分钟前',
      like: 12,
      content: '挑食？这么简单，先看粮食是不是霉变的， 换袋新粮试试，如果还是不吃，那简单，饿！',
      children: [{
        header: '/image/defaultHeader.png',
        name: '酷酷马鹿',
        time: '8分钟前',
        like: 12,
        content: '哈哈哈哈哈哈哈哈阿哈哈哈',
      }, {
        header: '/image/defaultHeader.png',
        name: '酷酷马鹿',
        time: '8分钟前',
        like: 12,
        content: '哇塞啊',
      }]
    }, {
      header: '/image/defaultHeader.png',
      name: '亦无老了',
      time: '30分钟前',
      like: 0,
      content: '此生无故人',
    }]
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

  // 轮播切换
  swiperTrans(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },

  // 选中图片
  checkoutImg(e) {
    this.setData({
      swiperIndex: e.currentTarget.dataset.index
    })
  },

  // 预览图片
  previewImg() {
    wx.previewImage({
      current: this.data.swiper[this.data.swiperIndex],
      urls: this.data.swiper
    })
  },

  // 选中评论类型
  checkoutComentType(e) {
    this.setData({
      commentTypeIndex: e.currentTarget.dataset.index
    })
  }
})
