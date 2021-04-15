import {
  wxLogin
} from '../../config/api'

Page({
  data: {
    code: ''
  },

  onLoad() {
    let that = this
    wx.login({
      success: function (res) {
        that.setData({
          code: res.code
        })
      }
    })
  },

  // 授权登陆
  getPhoneNumber(e) {
    let obj = {
      code: this.data.code,
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv
    }
    wxLogin(obj).then(res=>{
      wx.setStorageSync('token', res.data.token)
      wx.setStorageSync('loginStatus', true)
      wx.setStorageSync('userInfo', {
        nickname: res.data.nickname,
        avatar: res.data.avatar
      })
    })
    if (!wx.getStorageSync('authStatus')) {
      wx.navigateTo({
        url: '/pages/auth/auth',
      })
    } else {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },

  // 返回首页
  toIndex(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})