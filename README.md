#开篇语
>前几天发了一篇练手文章，不出意外地火了：
[《简年15： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 》](http://www.jianshu.com/p/9f5fd83aad52)
后来又发了BUG修复的版本，出乎意料的火了：
[简年18： 微信小程序（有始有终，全部代码）开发---跑步App+音乐播放器 Bug修复](http://www.jianshu.com/p/c2f9034baca7)
昨晚又新增了一个模块，嗯，这个还没火：
[微信小程序（有始有终，全部代码）开发--- 新增模块： 图片选取以及拍照功能](http://www.jianshu.com/p/c4b4b56a95ff)


#正文
####一、UI改进
>今天本来想就此罢手，但是没办法，手痒难耐，所以又加了个在线放视频的功能。同时调整了下以前的一些代码，比如一些的UI设计增进了。```.WXSS```文件也被我丰富了一点点。那些不影响功能的我就没有细说了，代码已经全部更新于Github，欢迎大家去查看：
[https://github.com/HustWolfzzb/WeChat-Fucking_Running.git](https://github.com/HustWolfzzb/WeChat-Fucking_Running.git)
更新之后的页面更加漂亮了。当然，功能也稍微提高了点：

![请忽略下面那两个大头，按照自己的喜好去找替代的图片](http://upload-images.jianshu.io/upload_images/3810775-dba38b20b304177d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>更新的代码如下，是在```app.json```这个文件下作的更改：

```

  "window":{
    "backgroundTextStyle":"black",
    "navigationBarBackgroundColor": "#ffddae",
    "navigationBarTitleText": "Running Man",
    "navigationBarTextStyle":"black"
  },
   "tabBar": {
    

    "list": [{
      "pagePath": "pages/index",

      "backgroundColor": "#adddaa",
       "iconPath":"/resources/yan1.jpg",
       "selectedIconPath":"/resources/yan1.jpg"
    }, {
      "pagePath": "pages/logs/logs",

       "iconPath":"/resources/yan2.jpg",
       "selectedIconPath":"/resources/yan2.jpg"
    }
    ],
    "color": "#ad8888",
    "backgroundColor": "#fdfdae"
  }
```

####二、废物利用
>大家伙还记得我一直吐槽的莫名其妙的动画界面吗？现在算是废物利用，我给它增开了一个组件，就是今天的主角--```video```。顾名思义，就是视频播放。内容的话选择了我比较喜欢的东京食尸鬼。不过由于第一季的画质较高，转码估计要转到我开学，所以我就选择了画质较差的第二季。但是手机用户的观看体验应该也差不了多少。文件格式采用的是webm，也就是通用的web播放流媒体的视频文件格式。

![本地文件。上传至服务器端也是这样命名的](http://upload-images.jianshu.io/upload_images/3810775-7525241e8fb43713.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>代码更新如下：

**<animation.js>**
```

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
```


**<animation.wxml>**
```
<import src="../common/header.wxml" />
<import src="../common/footer.wxml" />

<label class="label" type="primary">东京食尸鬼第{{chapter}}集</label>
<video class="video" src="http://119.29.74.46/Dj/Dj_{{chapter}}.webm"   objectFit="contain"></video>



<button bindtap="Last">上一集</button>
<button bindtap="Next">下一集</button>


<view class="container">
<!--  <template is="header" data="{{title: 'createAnimation'}}"/>
-->
  <view class="page-body">
    <view class="page-body-wrapper">
      <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
      </view>
      <view class="animation-buttons" scroll-y="true">
        <button class="animation-button" bindtap="rotate">Rotate</button>
        <button class="animation-button" bindtap="scale"> Scale</button>
        <button class="animation-button" bindtap="translate">Translate</button>
        <button class="animation-button" bindtap="skew">Skew</button>
     
        <button class="animation-button" bindtap="rotateAndScale">Rotate&Scale</button>
        <button class="animation-button" bindtap="rotateThenScale">Rotate-Scale</button>
        <button class="animation-button" bindtap="all">All</button>
        <button class="animation-button" bindtap="allInQueue">All~</button>
        <button class="animation-button-reset" bindtap="reset">Reset</button>
                 <view class="page-body-info">上面分别是旋转、缩放、移动、倾斜</view>
      </view>

    </view>
  </view>

  <template is="footer" />
</view>
```

![效果图](http://upload-images.jianshu.io/upload_images/3810775-3a5954cfe29f9452.gif?imageMogr2/auto-orient/strip)

>本次更改，其实还是有问题残留的，因为我暂时没找到办法获取wxml文件中的数值传到js文件中的办法。大家可以看到上面的js文件中的data里面有一个Chapters被注释了。我的本来的想法是利用wx:for="{{Chapters}}"来直接把所有的视频链接做成按钮放到页面上去的。就类似下面的这样:

![每一集配备一个按钮，羡慕](http://upload-images.jianshu.io/upload_images/3810775-e2cf1a407813a514.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 很可惜的没有成功回调wxml中的item的id，看我网上的大神说，利用wx:for-index可以回调id号，然后利用currentTarget.id;获取id并导入js文件中，但是很可惜我并没有成功。不过如果最后还是不行的话，可以采用蠢办法：一个按钮一个事件绑定的野路子。这样不需要什么的回调，你选择哪个按钮，我就给你专门的写一个事件，反正一部动漫，写死了也就几十个按钮事件绑定，而且代码重用率接近99%，意思就是说：复制一下代码，然后改一两个参数就可以了。但是这样很蠢，所以我希望可以找到更好的办法。目前来看，还没找到，如果找到了，后期我会写在评论中。小程序最近玩的很多了。要换点花样了。然后，后天就去学校了，真是悲伤。在家的效率很低，但是胜在自由灵活在。在学校，有点怕！


----
>作为半个强迫症，我怎么着都想着改善UI 所以刚刚发觉那个上一集下一集的按钮很丑，而且上边的label部队称，所以换了个我比较喜欢的，把样式文件改了下，好看了不少了：


![好看不少了](http://upload-images.jianshu.io/upload_images/3810775-c37a1a5980fd681c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>具体改动了：

**<animation.wxss>**
```
.page-body-wrapper {
  flex-grow: 1;
}
.index{
    background-color: #Eeefaf;
    font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
    flex: 1;
    min-height: 100%;
    font-size: 32rpx;
}
.label
{
  width: 750rpx;
  position:center;
  padding-left: 250rpx
}
```

**<animation.wxml>**
```

<button type="primary" bindtap="Last">上一集</button>

<button type="primary" bindtap="Next">下一集</button>
```
#结束语
>小程序算是假期的一个调剂吧，不然可能就真的天天看小说，然后逛逛B站了。额，不知道有没有追看我的文章的body（除了我已知的那位）？很Sorry，明天可能就会很少更新了。后天去县城，大后天到学校。然后我就要开始我的拼命三郎之路了。如果下学期运气够好，计算机三四级一刀斩，成绩分数够我保研，那么以后我估计爆文多的是，如果运气不够，那么以后我估计就会坎坷了。在家积蓄了一个月的洪荒之力，已经按耐不住了。去了学校，看命吧！

![现在学校群最火的图](http://upload-images.jianshu.io/upload_images/3810775-4506404e0beb5c39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





![全部功能的展示。飞速，可能看不清，如果有兴趣请你看文章！](http://upload-images.jianshu.io/upload_images/3810775-34c690fd8a2d59f9.gif?imageMogr2/auto-orient/strip)



>另外，明天可能开始看看机器学习的内容。有兴趣的朋友可以跟上。恩，当然，也许是iOS的开发，还没准备干嘛但是总是要找点事情干的。讲不好发现别的不好玩，又回来折腾小程序了呢！



#个人宣言
>知识传递力量，技术无国界，文化改变生活！
