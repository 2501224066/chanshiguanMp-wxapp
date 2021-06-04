const App = getApp();

Component({
  data: {
    selected: 0,
    selectedColor: "#9147FF",
    color: "#828088",
    list: [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/image/index.png",
        "selectedIconPath": "/image/indexSel.png"
      },
      {
        "pagePath": "pages/diary/diary",
        "text": "日记",
        "iconPath": "/image/diary.png",
        "selectedIconPath": "/image/diarySel.png"
      },
      {
        "pagePath": "pages/pets/pets",
        "text": "宠物",
        "iconPath": "/image/petsSel.png",
        "selectedIconPath": "/image/petsSel.png"
      },
      {
        "pagePath": "pages/news/news",
        "text": "消息",
        "iconPath": "/image/news.png",
        "selectedIconPath": "/image/newsSel.png"
      },
      {
        "pagePath": "pages/my/my",
        "text": "我",
        "iconPath": "/image/my.png",
        "selectedIconPath": "/image/mySel.png"
      }
    ],
    iphoneFooter: App.globalData.iphoneFooter
  },

  methods: {
    // 点击切换导航
    switchTab(e) {
      wx.reLaunch({
        url: "/" + e.currentTarget.dataset.path
      })
    }
  },

  lifetimes: {
    attached() {
      let selected = 0
      switch (getCurrentPages()[0].route) {
        case "pages/index/index":
          selected = 0
          break
        case "pages/diary/diary":
          selected = 1
          break
        case "pages/pets/pets":
          selected = 2
          break
        case "pages/news/news":
          selected = 3
          break
        case "pages/my/my":
          selected = 4
          break
      }
      this.setData({
        selected: selected
      })
    }
  },
})
