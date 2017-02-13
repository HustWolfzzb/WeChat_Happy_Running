#开篇语
>寒假发了一篇练手文章，不出意外地火了：
[《简年15： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 》](http://www.jianshu.com/p/9f5fd83aad52)
后来又发了BUG修复的版本，出乎意料的火了：
[简年18： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 Bug修复](http://www.jianshu.com/p/c2f9034baca7)
后来又新增了一个模块，嗯，这个也火了：
[微信小程序（有始有终，全部代码）开发--- 新增模块： 图片选取以及拍照功能](http://www.jianshu.com/p/c4b4b56a95ff)
现在开学了，我又写了点东西：
[微信小程序（有始有终，全部代码）开发--- 新增【录音】以及UI改进](http://www.jianshu.com/p/90d7768c8a4f)




#正文
####一、UI改进
>本来想要就此封笔，但是最近觉得要找点事情干，所以还是写一写吧。同时调整了下以前的一些代码，比如一些的UI设计增进了。代码已经全部更新于Github，欢迎大家去查看：
[https://github.com/HustWolfzzb/WeChat-Fucking_Running.git](https://github.com/HustWolfzzb/WeChat-Fucking_Running.git)


>更新之后的页面更加漂亮了。新增了一个录音的模块，由于主页面index.wxml只能放五个导航条，所以就只能整合在最后一个影音里面了。不然的话无处安放也是讨嫌！

![新增的录音功能](http://upload-images.jianshu.io/upload_images/3810775-7e433175399e8854.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>更新的代码如下，是在```picture.js```这个文件下作的更改：

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
```

>另外还有在wxml中加入修改：

```

<view class="header" style="flex-direction:row;">

<!--通过数据绑定的方式动态获取js数据-->
<image src="{{source}}" mode="fulltoFill"  class="pic"/>

<!--监听按钮-->
<button type="primary" bindtap="listenerButtonChooseImage" class="button_anniu">点击我选择相册</button>

<button bindtap="yulan"><image src="/resources/yulan.png"  class="swiper"></image></button>


<view>
<button bindtap="Startrecord" class="button_anniu"> 开始录音 </button>
<button bindtap="Stoprecord" class="button_anniu">  停止录音</button>
</view>



</view>
```
>另外，不好意思的声明下：录音功能是做出来了，但是调试的时候，录音是可以完美进行的，但是涉及到播放控制的时候我就直接GG了。API一点都不配合我。

![就这三个API 死命的不配和我，恨不得生啖其肉，如果他有](http://upload-images.jianshu.io/upload_images/3810775-7cec1e769c4ec0ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  

![能用，但是之后我就不知道它存哪儿去了！！](http://upload-images.jianshu.io/upload_images/3810775-f1af333833ad5567.gif?imageMogr2/auto-orient/strip)


####二、UI改进
>UI一直是我的心头病，没办法，强迫症一出来，几头牛都拉不回来。不把尺寸搞得误差在像素级根本不能让我心安。所以这次改了几个地方。然后感觉好多了。




>代码更新如下：

**<music.wxml>**
```

<view class="header" style="flex-direction:row;">


<swiper  class="swiper" indicator-dots="{{indicatorDots}}"
  autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" width="100" height="10">
    <swiper-item wx:for="{{imgUrls}}">
      <image src="{{item}}" class="slide-image" class="banner" mode="fullToFill"/>
    </swiper-item>
</swiper>

<view class="img">
<image src="/resources/Carly.png" class="pic" ></image>

</view>

<view class="img1">
<block wx:for="{{song}}" wx:key="id" class="audio">
<block wx:if="{{item.musicid==count}}"> 
<audio poster="{{item.poster}}" name="{{item.name}}" author="{{item.author}}" src="{{item.src}}" id="myAudio" controls="true">
<view style="display:flex;flex-direction: row;">
<button  type="primary" bindtap="audioPlay" class="button_anniu">Start</button>
<button type="primary" bindtap="audioPause" class="button_anniu">Pause</button>
<button type="primary" bindtap="audio14" class="button_anniu">To14s</button>
<button type="primary" bindtap="audioStart" class="button_anniu">Stop</button>
</view>

<view style="display:flex;flex-direction: row;">
<button type="primary" bindtap="NextMusic" class="button_anniu"> Next </button>
<button  type="primary" bindtap="LastMusic" class="button_anniu">Last</button>
</view>
</audio>
</block>
</block>
</view>



</view>

```


**《music.wxss》**
```

.banner{
    width: 750rpx;
    height: 80rpx;
   position: center;

}

.img{
    position: center;
    padding-left: 100rpx;
    padding-right: 100rpx;
}

.img1{
    position: center;
    padding-left: 75rpx;
    
}

.pic{
    width: 550rpx;
    height:  640rpx;

}



.button_anniu{
    width: 150rpx;
    height: 100rpx;
  margin: 50rpx auto; 
    display: flex;

}

.swiper{
    width: 750rpx;
    height: 80rpx;
    position: center;
}
```

![效果图，好看了点吧
](http://upload-images.jianshu.io/upload_images/3810775-71e7ef3e155efbb2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>主页的改进，我觉得很好看咯！！而且加了滚条，可以滚出三个图。

**《index.wxml》**
```
<view class="index">
    <!--标题-->

    <view class="header"  >
       <view style="flex-direction:row;"> <image class="icon" src="/resources/fuckrun.png" mode="aspectFill"/></view>

        <view class="bigTitle">Fucking Running</view>
        <view class="desc">The First Program of HustWolf and XNC</view>
    </view>

    <view class="body">
        <view class="widget">
            <block wx:for="{{pageNames}}">
                <view class="widgets__item">
                    <navigator class="navigator-hover" url="{{item.id}}/{{item.id}}">{{item.name}}</navigator>
                </view>
            </block>
        </view>
    </view>
</view>


 <scroll-view scroll-y="true" style="height: 630rpx;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">

<image  class="pic" src="/resources/run2.png" mode="aspectFill"/>
<image  class="pic" src="/resources/run1.png" mode="aspectFill"/>
<image  class="pic" src="/resources/run0.png" mode="aspectFill"/>


</scroll-view>

```





![看看效果咯，漂亮啊](http://upload-images.jianshu.io/upload_images/3810775-4cb2d507c9f07086.gif?imageMogr2/auto-orient/strip)



----
>还是需要改进啊。没办法了。我现在是下午七点三十四，但是我还没吃饭，有点饿！所以我待会还要走到东边去，大概半个小时，然后再去我亲爱的，亲爱的韵苑大酒店吃一顿，如果有黄焖鸡米饭就大运临头了，没有的话吃一份卤鸭饭就行了。。

![时间](http://upload-images.jianshu.io/upload_images/3810775-aedd1e535095aaf6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




#结束语
>小程序算是假期的一个调剂吧，不过，貌似被我成功的带到大三下了。主要是不能持续产出，我会松懈，所以寒假的氛围其实还是蛮好的。在学校就贝格忠东喜支配了。心塞，虽然效率高了不少，但是还是想家了。最想家的一次。


-------

>今天是正式开学的第一天，我得证明下：

![我这是自虐。。。每次看到都会想家。。。我不是恋家的人啊](http://upload-images.jianshu.io/upload_images/3810775-f848ee3b7aa15427.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)






![全部功能的展示（还是以前的，这次改动太小了 不截图了）。飞速，可能看不清，如果有兴趣请你看文章！](http://upload-images.jianshu.io/upload_images/3810775-34c690fd8a2d59f9.gif?imageMogr2/auto-orient/strip)




#个人宣言
>知识传递力量，技术无国界，文化改变生活！
