const App = getApp();

Page({
  data: {
    phonePrefixIndex: 0,
    iphoneFooter: false,
    phonePrefix: ['+86', '+852', '+853', '+886', '+82', '+81', '+1', '+44']
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter,
    })
  },

  // 却换手机号前缀
  checkoutPhonePrefix(e) {
    this.setData({
      phonePrefixIndex: e.detail.value
    })
  },

  // 跳转
  to(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
})
