import {
  updateUserInfo
} from '../../config/api'

Page({
  bindGetUserInfo(e) {
    // 存储用户信息
    wx.setStorageSync('userInfo', {
      nickname: e.detail.userInfo.nickName,
      avatar: e.detail.userInfo.avatarUrl
    })

    let obj = {
      nickname: e.detail.userInfo.nickName,
      headImg: e.detail.userInfo.avatarUrl
    }
    updateUserInfo(obj).then(res => {
      wx.setStorageSync('authStatus', true)
      wx.showToast({
        icon: "success",
        title: '授权成功',
        success() {
          wx.switchTab({
            url: '/pages/my/my'
          })
        }
      })
    })
  },

  // 返回首页
  toIndex(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})