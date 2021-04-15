Page({
  data: {
    loginStatus: false,
    userInfo: {},
    list: [{
      label: "关注",
      num: 88
    }, {
      label: "粉丝",
      num: 27
    }, {
      label: "动态",
      num: 35
    }, {
      label: "吸宠",
      num: 10
    }]
  },

  onShow() {
    if(!wx.getStorageSync('loginStatus')){
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }

    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
      loginStatus: wx.getStorageSync('loginStatus')
    })
  },

  // 检测登录
  verify() {
    if (!wx.getStorageSync('loginStatus')) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }else{
      return true
    }
  },

  goto() {
   if(this.verify()){
console.log(1)
   }
  }

})