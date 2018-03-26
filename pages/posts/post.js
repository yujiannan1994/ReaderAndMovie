var postsData = require('../../data/posts-data.js');  //要用相对路径

Page({
  data: {
    text: "This is page data."
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //而这个动作A的执行，是在onLoad函数执行之后发生的
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    this.setData({ 
      posts_key: postsData.postList
    });
  }
})