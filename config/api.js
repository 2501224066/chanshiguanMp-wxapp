var common = require('./request')
var md5 = require('../utils/md5.js');


// 视频相关密钥
export function md() {
  var arr = [];
  // 随机字符串
  var str = "abcdefhijkmnprstwxyz2345678"
  var randomString = ""
  for (var i = 0; i < 8; i++) randomString += str.charAt(Math.floor(Math.random() * str.length));
  arr.push(randomString)
  // 10位时间戳
  var time = Math.floor((new Date()).getTime()/1000)
  arr.push(time)
  // MD5
  var md = md5.md5(arr[0] + arr[1] + "OawM37sQfZekGSFy").toLowerCase()
  arr.push(md)
  return arr
}

// 获取免登可看的日记列表
export function petDiaryInfoGetDiary(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getDiary' + repair,
    data: data
  })
}

// 获取日记详情
export function petDiaryInfoGetDiaryDetail(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getDiaryDetail' + repair,
    data: data
  })
}

// 查询日记评论列表（仅返回两层）
export function petDiaryInfoGetCommectLists(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getCommectLists' + repair,
    data: data
  })
}

// 获取视频
export function videoUserGetVideoByIds(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/video/user/getVideoByIds' + repair,
    data: data
  })
}

// 获取视频列表
export function videoUserGetVideoByRecommend(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/video/user/getVideoByRecommend' + repair,
    data: data
  })
}

// 批量获取帖子信息
export function postStatisticQuery(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/postStatistic/query' + repair,
    data: data
  })
}

// 登陆
export function wxLogin(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/wx/wxlogin' + repair,
    data: data
  })
}

// 修改用户信息
export function updateUserInfo(data, repair = '') {
  return common.go({
    method: 'put',
    url: '/user/info/update ' + repair,
    data: data
  })
}