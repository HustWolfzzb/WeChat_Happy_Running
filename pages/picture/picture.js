//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
source:"http://159.203.250.111/Carly.png",
  },

  
 listenerButtonChooseImage: function() {
      var that = this;
      wx.chooseImage({
          count: 1,
          //original原图，compressed压缩图
          sizeType: ['original'],
          //album来源相册 camera相机 
          sourceType: ['album', 'camera'],
          //成功时会回调
          success: function(res) {
                //重绘视图
              that.setData({
                  source: res.tempFilePaths,
                             })

          }
      })
  },
  
  yulan:function(){
    var that=this;
    wx.previewImage({
   current: 'http://119.29.74.46/myphoto/5.jpg', // 当前显示图片的链接，不填则默认为 urls 的第一张
  urls: [ 'http://119.29.74.46/myphoto/0.jpg',
   'http://119.29.74.46/myphoto/1.jpg',
    'http://119.29.74.46/myphoto/2.jpg',
     'http://119.29.74.46/myphoto/3.jpg',
      'http://119.29.74.46/myphoto/4.jpg',
       'http://119.29.74.46/myphoto/5.jpg',
       'http://119.29.74.46/myphoto/6.jpg',
        'http://119.29.74.46/myphoto/7.jpg'],
  success: function(res){

   
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})
  },


Startrecord:function(){
wx.startRecord({
  success: function(res) {
    var tempFilePath = res.tempFilePath
      wx.playVoice({
      filePath: tempFilePath
    })

    setTimeout(function() {
        //暂停播放
      wx.pauseVoice()
    }, 5000)
  }
})


    setTimeout(function(){
      wx.stopVoice()
    }, 5000)
},



Stoprecord:function(){
    var that=this;
   wx.stopRecord({
    success: function(res){
      // succes
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
},







   onShareAppMessage: function () {
    return {
      title: '欢迎使用颜大傻牌跑步计',
      desc: '将你的战绩分享到~~~',
      path: '/page/picture/picture.js'
    }
  },
})






