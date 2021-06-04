Page({
  data: {

  },

  // 跳转
  to(e) {
    if (e.currentTarget.dataset.url != '') {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    }
  },
})
