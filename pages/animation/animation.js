  function getRandomColor () {
    let rgb = []
    for (let i = 0 ; i < 3; ++i){
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  } 

  Page({
    onReady: function () {
      this.videoContext = wx.createVideoContext('myVideo')
      this.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 1000,
    timingFunction: "ease",
    delay: 0
  })

  },
    inputValue: '',


  data:{
// Chapters:[1,2,3,4,5,6,7,8,9,10,11,12],
chapter:0,
 src: '',
    danmuList: [
      {
        text: '请问YYW在吗？',
        color: '#ff0000',
        time: 1
      },
            {
        text: '一个人写弹幕太苦逼了',
        color: '#eeeeaa',
        time: 2
      },
            {
        text: '你们要的弹幕君来了，还差个计数君',
        color: '#e0aaa0',
        time: 3
      },
            {
        text: '傻大颜在不，能看到吗？？',
        color: '#eeeeee',
        time: 4
      },
            {
        text: 'YYW是哪个？？',
        color: '#faaaa0',
        time: 5
      },
      {
        text: '请问颜大傻是谁？',
        color: '#ff00ff',
        time: 6
    }]
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
      title: '欢迎使用颜大傻牌视频播放器',
      desc: '将你正在看的片分享到~~~',
      path: '/page/animation/animation.js'
    }
  },



   bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },

  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }

})
