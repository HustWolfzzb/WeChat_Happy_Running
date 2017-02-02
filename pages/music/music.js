
Page(
{
   onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
 
 
  data: {
    poster:'http://159.203.250.111/Carly.png',
    name: 'Carly_Rae_Jepsen-Call_Me_Baby',
    author: 'Carly_Rae_Jepsen',
    src: 'http://159.203.250.111/Call_Me_Baby.mp3',
    // count:1,
    imgUrls: [
      'http://159.203.250.111/banner1.png',
      'http://159.203.250.111/banner2.png',
      'http://159.203.250.111/banner3.png',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,

  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)

},
  
changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  //  changebanner: function(e) {
// var that = this 
// if (that.data.count=3){
//   that.data.count - 2
// }
  //   this.setData({
  //     count: this.data.count + 1
  //   })
  // },


  
   onShareAppMessage: function () {
    return {
      title: '欢迎使用颜大傻牌音乐播放器',
      desc: '将你正在听的歌分享到~~~',
      path: '/page/music/music.js'
    }
  },

})



