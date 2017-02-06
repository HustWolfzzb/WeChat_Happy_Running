Page({
  onReady: function () {
    this.animation = wx.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})

  },


  data:{
// Chapters:[1,2,3,4,5,6,7,8,9,10,11,12],
chapter:0
},

Next:function(){
this.setData(
{
  chapter:this.data.chapter + 1
})
},
  Last:function(){
    this.setData(
    {
      chapter:this.data.chapter - 1
    })
  },
  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },
  scale: function () {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  translate: function () {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },
  skew: function () {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  rotateAndScale: function () {
    this.animation.rotate(Math.random() * 720 - 360)
        .scale(Math.random() * 2)
        .step()
    this.setData({ animation: this.animation.export() })
  },
  rotateThenScale: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
        .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  all: function () {
    this.animation.rotate(Math.random() * 720 - 360)
        .scale(Math.random() * 2)
        .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
        .skew(Math.random() * 90, Math.random() * 90)
        .step()
    this.setData({ animation: this.animation.export() })
  },
  allInQueue: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
        .scale(Math.random() * 2).step()
        .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
        .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function () {
    this.animation.rotate(0, 0)
                  .scale(1)
                  .translate(0, 0)
                  .skew(0, 0)
                  .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  },
    
   onShareAppMessage: function () {
    return {
      title: '欢迎使用颜大傻牌音乐播放器',
      desc: '将你正在听的歌分享到~~~',
      path: '/page/animation/animation.js'
    }
  },
})
