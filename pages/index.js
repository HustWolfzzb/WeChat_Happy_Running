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
            {
        id: 'picture',
        name: '图片',
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
