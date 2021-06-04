Page({
  data: {
    tabIndex: 0,
    tab: ['动态', '宠物']
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  }
})
