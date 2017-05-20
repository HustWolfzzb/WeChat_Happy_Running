  
Page(
{
   onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
 
 
  data: {
    
    song: [{
      musicid: 1,
      poster: 'http://159.203.250.111/Carly.png',
      name: 'Call_Me_Baby',
      author: 'Carly_Rae_Jepsen',
      src: 'http://159.203.250.111/Call_Me_Baby.mp3',
    },

    {
      musicid: 2,
      poster: 'http://159.203.250.111/carly.png',
      name: 'Good_Time',
      author: 'Carly_Rae_Jepsen',
      src: 'http://159.203.250.111/Good_Time.mp3',
    },

    {
      musicid: 3,
      poster: 'http://159.203.250.111/five1.png',
      name: 'Maps',
      author: 'Marron 5',
      src: 'http://159.203.250.111/maps.mp3',
    },

    {
      musicid: 4,
      poster: 'http://159.203.250.111/five2.png',
      name: 'Animals',
      author: 'Marron 5',
      src: 'http://159.203.250.111/Animals.mp3',
    },

    {
      musicid: 5,
      poster: 'http://159.203.250.111/five3.png',
      name: 'Sugar',
      author: 'Marron 5',
      src: 'http://159.203.250.111/Sugar.mp3',
    },
    {
      musicid: 6,

      src: 'http://159.203.250.111/All_Right.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'All_Right.mp3'
    },



    {
      musicid: 7,

      src: 'http://159.203.250.111/Animals.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Animals.mp3',
    },

    {
      musicid: 8,

      src: 'http://159.203.250.111/Bila.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Bila.mp3',
    },

    {
      musicid: 9,

      src: 'http://159.203.250.111/Cake By The Ocean.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Cake By The Ocean.mp3',
    },

    {
      musicid: 10,

      src: 'http://159.203.250.111/Call_Me_Baby.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Call_Me_Baby.mp3',
    },




    {
      musicid: 11,

      src: 'http://159.203.250.111/Just the Way You Are.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Just the Way You Are.mp3',
    },

    {
      musicid: 12,

      src: 'http://159.203.250.111/Ken Arai - NEXT TO YOU.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Ken Arai - NEXT TO YOU.mp3',
    },

    {
      musicid: 13,

      src: 'http://159.203.250.111/Late Autumn.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Late Autumn.mp',
    },



    {
      musicid: 14,

      src: 'http://159.203.250.111/Lil Jon Remix.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Lil Jon Remix.mp3',
    },

    {
      musicid: 15,

      src: 'http://159.203.250.111/Lookas - Low Rider (Lookas Remix).mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Lookas - Low Rider (Lookas Remix).mp3',
    },

    {
      musicid: 16,

      src: 'http://159.203.250.111/Love_home.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Love_home.mp3',
    },

    {
      musicid: 17,

      src: 'http://159.203.250.111/Maroon 5 - Maps.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Maroon 5 - Maps.mp3',
    },

    {
      musicid: 18,

      src: 'http://159.203.250.111/Martin Ermen - River Flows In You.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Martin Ermen - River Flows In You.mp3',
    },

    {
      musicid: 19,

      src: 'http://159.203.250.111/Matt B - Color Blind.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Matt B - Color Blind.mp3',
    },

    {
      musicid: 20,

      src: 'http://159.203.250.111/MetroGnome - Ringtone (MetroGnome Remix).mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'MetroGnome - Ringtone (MetroGnome Remix).mp3',
    },

    {
      musicid: 21,

      src: 'http://159.203.250.111/Million Years Ago (Acoustic Cover by Emir).mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Million Years Ago (Acoustic Cover by Emir).mp3',
    },



    {
      musicid: 22,

      src: 'http://159.203.250.111/Neo Retros - Battles and Wastelands.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Neo Retros - Battles and Wastelands.mp3',
    },



    {
      musicid: 23,

      src: 'http://159.203.250.111/OMFG - Hello.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'OMFG - Hello.mp3',
    },

    {
      musicid: 24,

      src: 'http://159.203.250.111/OneRepublic - Secrets.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'OneRepublic - Secrets.mp3',
    },

    {
      musicid: 25,

      src: 'http://159.203.250.111/Pop Danthology 2012.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Pop Danthology 2012.mp3',
    },

    {
      musicid: 26,

      src: 'http://159.203.250.111/Question.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Question.mp3',
    },

    {
      musicid: 27,

      src: 'http://159.203.250.111/Remember.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Remember.mp3',
    },

    {
      musicid: 28,

      src: 'http://159.203.250.111/REOL - 宵々古今.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'lREOL - 宵々古今.mp3',
    },

    {
      musicid: 29,

      src: 'http://159.203.250.111/Rico Davis - Say Goodnight.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Rico Davis - Say Goodnight.mp3',
    },

    {
      musicid: 30,

      src: 'http://159.203.250.111/Rie fu - Life Is Like A Boat.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Rie fu - Life Is Like A Boat.mp3',
    },

    {
      musicid: 31,

      src: 'http://159.203.250.111/Right_Now (Na Na Na).mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Right_Now (Na Na Na).mp3',
    },




    {
      musicid: 31,

      src: 'http://159.203.250.111/Sami - Love You Like A Love Song.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Sami - Love You Like A Love Song.mp3',
    },

    {
      musicid: 32,

      src: 'http://159.203.250.111/Sara Nusara Poongprasert - เจอกับตัวเอง...ถึงรู้.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Sara Nusara Poongprasert - เจอกับตัวเอง...ถึงรู้.mp3',
    },




    {
      musicid: 33,

      src: 'http://159.203.250.111/Shakira - Try Everything.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Shakira - Try Everything.mp3',
    },

    {
      musicid: 34,

      src: 'http://159.203.250.111/Shane Filan - Beautiful In White (Demo).mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: '',
    },

    {
      musicid: 35,

      src: 'http://159.203.250.111/Stellar - 마스크.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Stellar - 마스크.mp3',
    },

    {
      musicid: 36,

      src: 'http://159.203.250.111/Sugar.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Sugar.mp3',
    },

    {
      musicid: 37,

      src: 'http://159.203.250.111/T-ara - 넘버나인 (No.9).mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'T-ara - 넘버나인 (No.9).mp3',
    },

    {
      musicid: 38,

      src: 'http://159.203.250.111/Tep No - Me And My Guitar.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'Tep No - Me And My Guitar.mp3',
    },

    {
      musicid: 39,

      src: 'http://159.203.250.111/TheFatRat,Laura Brehm - Monody.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'TheFatRat,Laura Brehm - Monody.mp3',
    },

    {
      musicid: 40,

      src: 'http://159.203.250.111/The Hill of Wind.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'The Hill of Wind.mp3',
    },

    {
      musicid: 41,

      src: 'http://159.203.250.111/The Lazy Song.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'The Lazy Song.mp3',
    },

    {
      musicid: 42,

      src: 'http://159.203.250.111/The Score - Better Than One.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'The Score - Better Than One.mp3',
    },

    {
      musicid: 43,

      src: 'http://159.203.250.111/The Ting Tings - Shut Up And Let Me Go.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'The Ting Tings - Shut Up And Let Me Go.mp3',
    },

    {
      musicid: 44,

      src: 'http://159.203.250.111/TK from 凛として時雨 - unravel.mp3',

      poster: 'http://upload.jianshu.io/users/upload_avatars/3810775/9af3193d2e18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',

      author: 'no one it is me!',

      name: 'TK from 凛として時雨 - unravel.mp3',
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



