  
Page(
{
   onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
 
 
  data: {
    
    song:[{
      musicid:1,
      poster:'http://159.203.250.111/Carly.png',
    name:'Call_Me_Baby',
    author: 'Carly_Rae_Jepsen',
    src:'http://159.203.250.111/Call_Me_Baby.mp3',
    },
    
    {
         musicid:2,
       poster:'http://159.203.250.111/carly.png',
    name:'Good_Time',
    author: 'Carly_Rae_Jepsen',
    src:'http://159.203.250.111/Good_Time.mp3',
    },
    
    {   musicid:3,
    poster:'http://159.203.250.111/five1.png',
    name:'Maps',
    author: 'Marron 5',
    src:'http://159.203.250.111/maps.mp3',
    },
    
    {   musicid:4,
    poster:'http://159.203.250.111/five2.png',
    name:'Animals',
    author: 'Marron 5',
    src:'http://159.203.250.111/Animals.mp3',
    },
    
    {   musicid:5,
    poster:'http://159.203.250.111/five3.png',
    name:'Sugar',
    author: 'Marron 5',
    src:'http://159.203.250.111/Sugar.mp3',
    },
    
],


count:1,
    imgUrls: [
      'http://159.203.250.111/banner1.png',
      'http://159.203.250.111/banner2.png',
      'http://159.203.250.111/banner3.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
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

   NextMusic: function(e) {
    this.setData({
      count: this.data.count + 1
    })
  },

   LastMusic: function(e) {
    this.setData({
      count: this.data.count - 1
    })
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


  
   onShareAppMessage: function () {
    return {
      title: '欢迎使用颜大傻牌音乐播放器',
      desc: '将你正在听的歌分享到~~~',
      path: '/page/music/music.js'
    }
  },

})



