Page({
  data: {
    patternIndex: 0,
    pattern: [{
      icon: "/image/pattern1.png",
      selectIcon: "/image/pattern1Sel.png",
      title: "领养"
    }, {
      icon: "/image/pattern2.png",
      selectIcon: "/image/pattern2Sel.png",
      title: "配对求偶"
    }, {
      icon: "/image/pattern3.png",
      selectIcon: "/image/pattern3Sel.png",
      title: "寄养"
    }, {
      icon: "/image/pattern4.png",
      selectIcon: "/image/pattern4Sel.png",
      title: "上门喂养"
    }],
    tagIndex: 0,
    tag: ['综合', '猫', '狗'],
    list: [{
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=174079424,330439059&fm=26&gp=0.jpg',
      title: '可爱的加菲猫宝宝免费送了啊',
      sex: 1,
      breed: '加菲猫',
      age: 15,
      applyNum: 12,
      money: 100,
      moneyType: '保证金',
      name: '奥特曼',
      time: '3小时前',
      distance: '13'
    }, {
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=174079424,330439059&fm=26&gp=0.jpg',
      title: '可爱的加菲猫宝宝免费送了啊',
      sex: 2,
      breed: '加菲猫',
      age: 15,
      applyNum: 0,
      money: 1500,
      moneyType: '领养费  ',
      name: '奥特曼',
      time: '2个月前',
      distance: '13'
    }]
  },

  // 切换模式
  patternCheckout(e) {
    this.setData({
      patternIndex: e.currentTarget.dataset.index
    })
  },

  // 切换标签
  tagCheckout(e) {
    this.setData({
      tagIndex: e.currentTarget.dataset.index
    })
  }
})
