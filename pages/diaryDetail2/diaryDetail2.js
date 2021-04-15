import {
  videoUserGetVideoByIds,
  videoUserGetVideoByRecommend,
  md
} from '../../config/api'


Page({
  data: {
    id: null,
    opShow: true,
    list: [],
    current: 0,
    stopShow: false
  },

  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getData()
  },

  getData() {
    let arr = md()
    let obj = {
      api_nonce: arr[0],
      api_timestamp: arr[1],
      api_sign: arr[2]
    }
    let repair = "/" + this.data.id
    videoUserGetVideoByIds(obj, repair).then(res => {
      this.setData({
        list: res.data
      })
      wx.createVideoContext('v' + this.data.current).play()
      this.getMore()
    })
  },

  getMore() {
    let arr = md()
    let obj = {
      api_nonce: arr[0],
      api_timestamp: arr[1],
      api_sign: arr[2]
    }
    let repair = "/" + this.data.list[this.data.list.length - 1].id + "/0/5"
    videoUserGetVideoByRecommend(obj, repair).then(res => {
      this.setData({
        list: this.data.list.concat(res.data)
      })
    })
  },

  // 开启关闭操作侧栏
  opShow() {
    this.setData({
      opShow: !this.data.opShow
    })
  },

  // 播放,暂停视频
  opVideo() {
    if (this.data.stopShow) {
      wx.createVideoContext('v' + this.data.current).play()
    } else {
      wx.createVideoContext('v' + this.data.current).pause()
    }
    this.setData({
      stopShow: !this.data.stopShow
    })
  },

  // 切换视频
  bindchange(e) {
    wx.createVideoContext('v' + this.data.current).stop()
    wx.createVideoContext('v' + e.detail.current).play()
    this.setData({
      current: e.detail.current,
      stopShow: false
    })
    if(e.detail.current==(this.data.list.length-1)){
      this.getMore()
    }
  }
})