import {
  petDiaryInfoGetDiary,
  postStatisticQuery
} from '../../config/api'

Page({
  data: {
    list: [],
    loadNum: {},
    page: 1,
    pageSize: 15
  },

  onLoad() {
    this.getData()
  },

  onShow() {
    if (this.data.list.length) {
      this.loadNum()
    }
  },

  getData(addStatus = false) {
    let obj = {
      pageNo: this.data.page,
      pageSize: this.data.pageSize
    }
    petDiaryInfoGetDiary(obj).then(res => {
      if (addStatus) {
        this.setData({
          list: this.data.list.concat(res.data)
        })
      } else {
        this.setData({
          list: res.data
        })
      }
      this.loadNum()
    })
  },

  // 帖子点赞数
  loadNum() {
    let postIds = ''
    this.data.list.forEach(element => {
      postIds += "&postIds=" + element.petDiaryDto.id
    });
    let repair = "?isNeedSniff=false" + postIds + "&type=1"
    postStatisticQuery(null, repair).then(res => {
      let loadNum = {}
      res.data.forEach(element => {
        loadNum[element.postId] = element.loadNum
      });
      this.setData({
        loadNum: loadNum
      })
    })
  },

  // 下一页
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getData(true)
  },

  // 跳转详情页
  toDetail(e) {
    if (e.currentTarget.dataset.videoid) {
      wx.navigateTo({
        url: '/pages/diaryDetail2/diaryDetail2?id=' + e.currentTarget.dataset.videoid,
      })
    } else {
      wx.navigateTo({
        url: '/pages/diaryDetail/diaryDetail?id=' + e.currentTarget.dataset.id,
      })
    }
  }
})