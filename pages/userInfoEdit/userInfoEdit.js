const App = getApp();

Page({
  data: {
    iphoneFooter: false,
    sexIndex: 0,
    sex: ['男', '女'],
    date: '2021-05-17',
    region: ['广东省', '广州市', '海珠区'],
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

  sex(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },

  date: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})
