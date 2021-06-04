Page({
  data: {
    tabIndex: 0,
    tab: ['我的发布', '我的申请', '领养协议', '领养码']
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  }
})
