#开篇语
>前几天发了一篇：
[《简年15： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 》](http://www.jianshu.com/p/9f5fd83aad52)
后来又发了BUG修复的版本：
[简年18： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 Bug修复](http://www.jianshu.com/p/c2f9034baca7)
本来以为这篇文章要沉底了。结果，一不小心貌似又出事了：

![本来以为这篇文章要沉底了。结果，一不小心貌似又出事了](http://upload-images.jianshu.io/upload_images/3810775-937895906233bd15.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>经过两天的同学聚会，我今天下午五点多到家，然后马不停蹄的开始进行了新模块的测试。这次有点不知道干嘛，但是突然想到要不要调用一下手机的硬件模块？最经典的自然就是照片了吗。微信的那个拍照功能看的我还很眼馋的！所以回来就想着加了个选取照片的模块上去。万幸，随着技术的逐渐进步，现在很快的就可以引入一些API和组件！哈哈，接下来展示下我的成果！




#正文
>这次回来，暂时只加了一个图片选取以及预览模块。虽然我说的很顺利，但是确实也经历了很多的Debug，现在对Bug简直是又爱又恨，爱恨交织，没有她让我觉得不真实，有了它让我很苦恼！所以我的Debug过程还是不放出来了！

####一、图片选择功能
>从本地相册选择图片或使用相机拍照

```
wx.chooseImage(OBJECT)

```


![参数说明](http://upload-images.jianshu.io/upload_images/3810775-7026138dace16215.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![效果图，设置为一开始为Carly Rae Jeepson](http://upload-images.jianshu.io/upload_images/3810775-82d1bb4ef1085ee4.gif?imageMogr2/auto-orient/strip)



>使用过程如下：

```
wx.chooseImage({
  count: 1, // 默认9
  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths
  }
})
```


>代码镶嵌在原本的代码框架中就是现在这样：


**《---picture.js》**
```
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
source:"",
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

wx.previewImage({
   current: 'http://119.29.74.46/myphoto/0.jpg', // 当前显示图片的链接，不填则默认为 urls 的第一张
  urls: [ 'http://119.29.74.46/myphoto/0.jpg',
   'http://119.29.74.46/myphoto/1.jpg',
    'http://119.29.74.46/myphoto/2.jpg',
     'http://119.29.74.46/myphoto/3.jpg',
      'http://119.29.74.46/myphoto/4.jpg'
      , 'http://119.29.74.46/myphoto/5.jpg',
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
})          }
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

```

**《---picture.wxml》**
```

<view class="header" style="flex-direction:row;">

<!--通过数据绑定的方式动态获取js数据-->
<image src="{{source}}" mode="fulltoFill"  class="pic"/>

<!--监听按钮-->
<button type="primary" bindtap="listenerButtonChooseImage" class="button_anniu">点击我选择相册</button>


<button bindtap="" class="button_anniu"> 发布 </button>
</view>
```


>整体的文件架构图如下：

![代码框架图](http://upload-images.jianshu.io/upload_images/3810775-995d2585be46b5d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####二、增置了图片预览
>图片预览功能需要服务器端的配置。所以，今后这可能是作为一个网站架构，成为某种服务性的商业软件的需要。配置服务器的小程序相对于功能性的来说要麻烦点，因为需要服务端的配合。但是幸亏我手头有几个空置的云服务器，所以就直接拿来写了一个这种东西。后期可能会直接开发一个类似于朋友圈的，可以把图片放到服务器上去。附上文字，然后慢慢的形成一个闭环的圈子。当然这是我的想法， 目前小程序只是玩耍的工具。


---------
>图片预览功能其实很简单，就是把服务器端的图片下载下来进行一种压缩格式的预览。稍后容我一一道来。目前这个功能，怎么来说呢，其实就是个鸡肋。因为我的图片大多是本地文件，要不就是直接加载的服务端的图片，预览这个作用实在让我难以找到用途。不过，如果今后真要布置一个圈子的话，这一点又是必不可少的。毕竟预览这个功能可以省下巨多流量！

**《picture.js》**

```
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
    wx.previewImage({
   current: 'http://119.29.74.46/myphoto/0.jpg', // 当前显示图片的链接，不填则默认为 urls 的第一张
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

   onShareAppMessage: function () {
    return {
      title: '欢迎使用颜大傻牌跑步计',
      desc: '将你的战绩分享到~~~',
      path: '/page/picture/picture.js'
    }
  },
})
```

**《picture.wxml》**
```
<view class="header" style="flex-direction:row;">

<!--通过数据绑定的方式动态获取js数据-->
<image src="{{source}}" mode="fulltoFill"  class="pic"/>

<!--监听按钮-->
<button type="primary" bindtap="listenerButtonChooseImage" class="button_anniu">点击我选择相册</button>

<button bindtap="yulan"><image src="/resources/yulan.png"  class="swiper"></image></button>
<button bindtap="" class="button_anniu"> 发布 </button>
</view>

```


![效果图](http://upload-images.jianshu.io/upload_images/3810775-2b574b634ef823f6.gif?imageMogr2/auto-orient/strip)

>预览功能的原理很简单，其实就是给你一个按钮，绑定一个事件。这个事件就是向服务器请求预览图片加载，所谓预览图片加载呢。其实就是一个压缩过的，低像素的图片啦。然后给你发送过来，你就完成了所谓的预览。


![服务器端远程控制界面。好吧，这就是为了震慑一下看到此文的小白玩家的。大神们就不要笑我了。](http://upload-images.jianshu.io/upload_images/3810775-3ebfc66692fb3e58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#结束语
>小程序算是假期的一个调剂吧，不然可能就真的天天看小说，然后逛逛B站了。昨天跟今天同学聚会，现在弄完了。在家还有三四天，好好珍惜，天天学习。争取做一个更好的我自己!

![快夸我](http://upload-images.jianshu.io/upload_images/3810775-6db9c032d7c399bb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



--------------

>写完教程片之后第一个项目性的完整文章：
[简年15： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器](http://www.jianshu.com/p/9f5fd83aad52)

>Bug修复：调整了Banner以及插入了音乐切换功能。
[简年18： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 Bug修复](http://www.jianshu.com/p/c2f9034baca7)



![全部功能的展示。飞速，可能看不清，如果有兴趣请你看文章！](http://upload-images.jianshu.io/upload_images/3810775-105596917837c8b6.gif?imageMogr2/auto-orient/strip)


#个人宣言
>知识传递力量，技术无国界，文化改变生活！
