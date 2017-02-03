# WeChat-Fucking_Running
![我的微信开发者工具](http://upload-images.jianshu.io/upload_images/3810775-166126bf188badb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#开篇语
>好不容易，终于把所有的基础课程全部看完了！昨天，我很高兴地开始了看别人做的项目进行深度的学习。其实也说不上是项目吧，更多的像是一种给新手看的示例代码。然后我在这些代码上面进行我自己的改进。最后也就有了接下来我会给大家带来的这篇文章中的项目。这个项目是完整的，它包括了一个原本的示例代码中带着的莫名其妙的动画组件（可能是为了更多额展示微信小程序的控件体系）以及跑步的组件，还有我后来自己加上去的一个音乐播放组件。总共也就有了三个的功能：动画效果展示；跑步的定时以及定位功能；音乐播放功能。
我相信本文能够很大程度上帮助想要进行开发但是苦于无门和资源所限的朋友领略小程序开发的魅力，非常完整地领略小程序的开发过程。当然，其中还存在一些bug需要去调，但是因为某种不可描述的原因，我没时间了。待会儿我不能继续进行开发了，所以我现在就把它写出来。仓促之处敬请见谅！
[https://github.com/HustWolfzzb/WeChat-Fucking_Running.git](https://github.com/HustWolfzzb/WeChat-Fucking_Running.git)

-----------
>###我的以前关于小程序的文章
>开篇语已经在热身阶段说过了，所以就不重复了。有兴趣的读者移步
[来写点微信小程序吧：D） ～～～（热身阶段）](http://www.jianshu.com/p/41fba598f7df)
以及前面借鉴小程序开发官方文档的简易教程写的总纲
[来写点微信小程序吧：D）   ～～～狂奔阶段](http://www.jianshu.com/p/bdad8f5397a8)
还有分析小程序的目录结构与配置的内容
[来写点微信小程序吧：D） ~ ~ ~ 分析小程序目录结构与配置](http://www.jianshu.com/p/9c6979b75aa1)
以及分析小程序的逻辑层的内容：
 [分析小程序逻辑层内容](http://www.jianshu.com/p/2660a5afc1b8)
 分析小程序视图层内容
[来写点微信小程序吧：D） ---- 分析小程序视图层内容](http://www.jianshu.com/p/7353e682ee13)
 分析小程序WXSS
 [来写点微信小程序吧：D） ---- 分析小程序WXSS](http://www.jianshu.com/p/3ce9905a0823)


>上一张学长的图片镇楼，下面直接上昨晚到现在一天时间的成果。

![张小龙学长](http://upload-images.jianshu.io/upload_images/3810775-905da403e0bfb75d.png)



#正文
>一、总体架构

#####1、文件架构
![项目文件构架](http://upload-images.jianshu.io/upload_images/3810775-31e5bd0de26fc987.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#####2、UI构造


![UI设计，好吧，是挺丑的。但是，没办法。我没那么多的艺术细胞](http://upload-images.jianshu.io/upload_images/3810775-ee26d69aac2928b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>整体的架构包括四个方面：首先我们打开小程序的话，会进入**  初始界面   **，也就是index文件所定义的主页面。
在其中有三个主要的功能按钮。分别是**  动画按钮、跑步按钮、音乐按钮**。

![三个主要功能按钮](http://upload-images.jianshu.io/upload_images/3810775-c577ea4e09187a3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>在最左上角的是我最喜欢的一个图标用来作为替代商标。

![天哪，金木研吃掉利世之后是真的帅到爆炸啊！！~~另外，我是直的](http://upload-images.jianshu.io/upload_images/3810775-de5c90746e7790a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>然后下面是我们开发项目的名字，**F\**king Running**```（这么优秀的名字当然不是我想出来了。欢迎大家去关注另一个作者）```。下面有一行小字，是署名开发者。

![作品名字和开发者](http://upload-images.jianshu.io/upload_images/3810775-7b75a96a737345fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>最下面一张图是我随便放的，当然如果要是真正的商业产品是可以用来做广告的。（这个广告是不是太大了？恩。主要是我暂时还没想到加什么，所以先放一张图片吧）。


![跑步的主题嘛~~~](http://upload-images.jianshu.io/upload_images/3810775-5e7bac10c1f68d1c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>页面的最下角有一个首页以及一个日志的按钮。首页是指直接回到首页，日志的话是查询我们进行了操作的时间。这两个基本上没什么用处。但是官网给的简易文档里面也有这个，所以我觉得加上会比较好，显得我做的工作多嘛！^_^





![下面两个鸡肋但是还蛮好看的模块](http://upload-images.jianshu.io/upload_images/3810775-a10b609fe2af55f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![鸡肋的效果，顺手引出来下一个模块](http://upload-images.jianshu.io/upload_images/3810775-6ad569bec9be9f67.gif?imageMogr2/auto-orient/strip)

>右上角的这三个点的按钮，想必大家都非常常见，因为微信里面始终都有这么三个点的分享按钮。一般来说点击这个就会有很多的复制链接的行为，比如说分享给别人，比如说复制链接，比如说在某个浏览器里面打开，都是在这个里面。目前我只加了一个分享的按钮，至于其他的，嗯，暂时没什么用处也就没加了。


![分享按钮](http://upload-images.jianshu.io/upload_images/3810775-72876fd27d75f5be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#####3、功能展示


>当我们点击这个莫名其妙的动画按钮，会出现一个蓝色的方块儿，这是让我们来进行操作的演示题。在下面有九个按钮，分别是**旋转、缩放、移动、倾斜**，上面所说的四种，分别是单个操作。然后接下来有，**先旋转再缩放**，有**旋转和缩放**一起进行，然后还有**所有的操作一起进行**，以及**所有的操作一个一个的轮流进行**，最后还有一个**Reset--恢复**按钮，也就是回归到我们最初时的状态，在下面我还给出了一些提示，欢迎大家阅览。好的，第一个按钮我们说到这里。

![莫名其妙的动画组件](http://upload-images.jianshu.io/upload_images/3810775-f8ed60d000d4cd96.gif?imageMogr2/auto-orient/strip)


>那么当我们打开第二个跑步按钮，小程序会自动的，读取我们当前的位置，然后在地图上表示出来，在第二个跑步页面中有三个按钮分别是**打开位置**，以及**开始跑步**和**暂停跑步**，有两个计数器，一个是**里程数**，也就是我们跑步的距离，然后还有一个是**时间**，即我们跑步所用的时间。在这三个按钮下面的是一个腾讯官方提供的地图，我们可以在地图上面标注我们当前所在的位置，以及让图标跟我们一起移动。静态的```getLocation()```我已经弄明白了，但是对于跑步过程中如何实时地更新自己的位置以及计算距离```openLocation()```，这个我还有一点点不明白。只能说项目文档的封装有点厉害，也可以说是我修炼不到家。

>当我们点击打开位置就会出现一张地图，然后在地图上可以进行我们常规所用的地图的操作，当然因为我没有那个开发者账户，所以目前的话我并不能使用这项功能，只能查看一下自己大概的位置，就比如说我现在在长沙旁边的宁乡县，但是系统给我定位定到了长沙。当我们返回之后，点击开始跑步，那么里程数就会随着我们位置的移动而改变，然后时间的话也会当我们从，点击开始跑步开始，就已经在自动的技术了，直到我们点击暂停跑步，它才会停止计数，这就是这个空间全部的功能。


![跑步组件功能展示](http://upload-images.jianshu.io/upload_images/3810775-67ea68c731dc4f71.gif?imageMogr2/auto-orient/strip)




>第三个空间是音乐空间，跑步之后来点歌是不是会很舒服呢？我就是这样觉得的。所以目前我精选了一**Carly Rae Jepsen**的照片，作为音乐界面的首页，然后在下面我仅仅放了一首她的歌，是**CallMe Baby**

![
Carly Rae Jepsen   -  Call Me Baby](http://upload-images.jianshu.io/upload_images/3810775-5c8352299a6a4d87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>当然由于我是吃晚饭的时候才开始进行音乐控件的操作，然后现在大概是八点，也就是差不多两个小时。音乐控件我还没有摸熟，有一些```API```的函数官方没有给出来，我得去找人问一下。所以很遗憾呢，目前这个东西只能看，然后点击一下，放一首歌。不过这也并不妨碍我来解说一下这个页面，首先这个页面有四个按钮，一个是**开始播放**，一个是**暂停**，一个是**设置当前播放时间为14秒**，最后一个是**停止播放**，每个按钮都跟我们常用的播放器的功能是一样的的。

![四个控制按钮](http://upload-images.jianshu.io/upload_images/3810775-cfc6de816b69c833.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>然后在最上方我放了一个Banner，这个Banner可以有三种图片切换模式，只要你点一下它就会切换（好吧，本来想做成那种自动切换的，但是学艺不精，还没做到），是我自己的一个开心的小玩具。最中间当然是我非常喜欢的**Carly_Rae_Jepsen  **。当然，我一个人在这瞎弄是比不上人家一个公司的团队在精心钻研好几天，甚至好几个月甚至好几年的所以，功能性方面，请不要强求，能用就行吧，等我后面再开发出音乐列表以及其他的一些功能，到时候说不定我真的可以上线，请大家期待。


![banner
效果展示](http://upload-images.jianshu.io/upload_images/3810775-29ee27474bcc5d68.gif?imageMogr2/auto-orient/strip)



>整体来说，整个项目的全部结构就差不多是这样的，项目文件，树状图已经在一开始就放出来了。在简书里面，我放上了所有的代码以及图片。但是如果各位嫌复制粘贴麻烦，就请去github下载。链接地址如下。至于具体的码代码的过程，请各位有兴趣的，可以按照我的思路一起来，首先呢，可以看到微信小程序是一种网页性的服务。类似于我们最常见的html5，加css3，加javascript的构造。所以我用以前写网站的时候的一些经验来解析这个代码。我的主要思路：就是首先我们要遍历一下.wxml文件，也就是最常见的超文本标记语言。它会告诉我们的手机浏览器，这个地方要放什么，那个地方放什么？这个地方长什么样，那个地方长什么样？然后具体的这个地方到底是长什么样呢就交给css也就是样式文件来处理。然后，还有Js文件，负责逻辑层的一些事件触发，就比如说我点了这个按钮一下会发生什么呢？这个就要交给javascript来进行解析。具体某一步我做什么这个我就不太多说了。反正我打开这个项目的第一页，我是找到了index.wxml文件。然后依次的看这个地方有个什么组件，这个地方有个什么事件触发，然后再在对应的.js或者是.wxss文件里面找到相关解释，再进行自己的一些理解与修改！就这么简单，读小程序千万别对着js文件去读，会疯的！最好的就是把自己代入用户：我做了这一步，会有什么事情发生？那么，这个事情的发生，在视图层是怎么实现？然后更深层次的逻辑层是怎么触发这些事件的？我们该如何做到这个事情？这么一番理解下来就很顺畅的可以坐到理解项目了。至于更深层次的读代码。我就没有太多的指导了。你要读这个还是要有点基础的， 人心不足蛇吞象一点都不好玩！

![主干道](http://upload-images.jianshu.io/upload_images/3810775-ec8afb44a18ce8d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#####3、代码和图片
>意外发现，代码实在太多了。现在是北京时间2017/2/2/23:59，我要睡觉了。一个个粘贴实在太麻烦了。我还是一次行的放到:
[https://github.com/HustWolfzzb/WeChat-Fucking_Running.git](https://github.com/HustWolfzzb/WeChat-Fucking_Running.git)
然后诸君有兴趣的自己去下载吧。

![2017/2/2/23:59](http://upload-images.jianshu.io/upload_images/3810775-5aa7124b83326b13.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>姑且把图片放在下面。这个放上来只要一拖就好，简单方便！（v保留了在项目文件中的名字，方便下载~）



![ok.jpg](http://upload-images.jianshu.io/upload_images/3810775-6545b949ddcf3465.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![redPoint.png](http://upload-images.jianshu.io/upload_images/3810775-4949ec2078a9dfdd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![banner1.png](http://upload-images.jianshu.io/upload_images/3810775-b801b105b60705d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![banner2.png](http://upload-images.jianshu.io/upload_images/3810775-069e03fcd5ec3ac7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![banner3.png](http://upload-images.jianshu.io/upload_images/3810775-802a1925f3b8587c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![Carly.png](http://upload-images.jianshu.io/upload_images/3810775-bf365c9592009908.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![fuckrun.png](http://upload-images.jianshu.io/upload_images/3810775-f90e2cf878a30157.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```
<!--
index.wxml
-->


<view clas="index">
    <!--标题-->

    <view class="header">
        <image class="icon" src="/resources/fuckrun.png" mode="aspectFill"/>
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

<image  class="pic" src="/resources/ok.jpg" mode="aspectFill"/>


```

```

<!--
index.js
-->

Page({
  data: {
    pageNames: [
      {
        id: 'animation',
        name: '动画',
      }, {
        id: 'run',
        name: '跑步',
      },
      {
        id: 'music',
        name: '音乐',
      },
    ],


  },

    onShareAppMessage: function () {
    return {
      title: '欢迎使用颜大傻牌多功能APP',
      desc: '将Fucking Running分享到~~~',
      path: '/page/index/index.js'
    }
  },

});

```

```
<!--
index.wxss
-->
.index{
    background-color: #Eeefaf;
    font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
    flex: 1;
    min-height: 100%;
    font-size: 32rpx;
}
.header{
    margin-top: 20;
    line-height: 1;
}
.icon{
    width: 60rpx;
    height: 60rpx;
    padding: 30;
    margin-top: 20;
    margin-bottom:20; 
}
.pic{
    width: 800rpx;
    height: 650rpx;
    padding: 30;
    margin-top: 20;
    margin-bottom:100; 
}


.bigTitle{
    font-size: 60rpx;
    padding-left:  150rpx;
    color: #556B2F;
    position: center;
}
.title{
    font-size: 60rpx;
    
}
.desc{
    margin-top: 15rpx;
    color: #8B1A1A;
    font-size: 30rpx;
    padding-left:  90rpx;

}


.body{
    padding-left: 30rpx;
    padding-right: 30rpx;
    overflow: hidden;
}




.navigator-hover {
    color:cornsilk;
    background-color: #8B1A1A;
    padding-left: 250rpx;

}


.widget{
    position: relative;
    padding-top: 26rpx;
    padding-bottom: 26rpx;
    padding-left: 40rpx;
    padding-right: 40rpx;
}
.widgets__item{
    margin-top: 30rpx;
    margin-bottom: 20rpx;
    background-color: black;
    overflow: hidden;
    border-radius: 4rpx;
    cursor: pointer;
    padding-left: 100;
}

```

#结束语
>小程序算是假期的一个调剂吧，不然可能就真的天天看小说，然后逛逛B站了。然后，我觉得我有必要show一下我的工作环境，最近都有点不想走人家，天天在家写代码了~~~ ~不过明天估计还是要出去走走的。一个很尊敬的姑奶奶一直叫我去她家里坐坐，吃顿饭。不去就真的感觉特别对不住老人家，以前都说年后去，结果很多次都是匆匆忙忙去学校。希望各位也珍惜眼前人，老人应该是对你最没有想法的人，但是往往也是关心你的想法最不含杂质的人。他们已经老了，再多的物欲横流都对他们影响甚小，趁着这些可爱的老人家还在世，多多去看望才是我们应该做的！

--------------

>大神的作品就不安利了。我自己写完的这些，我觉得应该比之前说的一些膜拜的作品要优秀了。明天继续改进，希望大家会喜欢！

![我的工作环境，我觉得我越来越有程序员的气息了
~ ~yeah yeah yeah](http://upload-images.jianshu.io/upload_images/3810775-8a865a8876f6418c.gif?imageMogr2/auto-orient/strip)

#个人宣言
>知识传递力量，技术无国界，文化改变生活！
