const App = getApp();

Component({
  data: {
    navHeight: null,
    navTop: null,
    region: null, // 地区
  },

  properties: {
    type: { // 类型
      type: Number,
      value: 1
    },
    bgColor: { // 背景色
      type: String,
      value: '#fff'
    },
    color: { // 字体颜色
      type: String,
      value: '#000'
    },
    img: { // 图片
      type: String,
      value: ''
    },
    title: { // 标题
      type: String,
      value: ''
    },
    url: { // 跳转路径
      type: String,
      value: ''
    },
    capsuleShow: { // 胶囊显示 
      type: Number,
      value: 1
    },
    pid: { // 宠物 pid
      type: String,
      value: ''
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop,
        region: wx.getStorageSync('region') || '南京'
      })
    }
  },

  methods: {
    // 跳转
    to(e) {
      if (e.currentTarget.dataset.url != '') {
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
      }
    },

    // 去首页
    toIndex() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    },

    // 返回
    back() {
      wx.navigateBack()
    }
  }
})
