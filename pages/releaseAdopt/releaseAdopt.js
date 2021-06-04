const App = getApp();

Page({
  data: {
    iphoneFooter: false
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  }
})