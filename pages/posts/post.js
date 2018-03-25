Page({
  data: {
    text: "This is page data.",
    date: "Mar 19 2018",
    title: "正是虾肥蟹壮时"
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log("onLoad");
    var posts_content = [
      {
        date: "Mar 19 2018",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/米诺·路飞1366.jpg",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“鳌封嫩玉双双满”",
        reading: "112",
        collection: "96",
        avatar: "/images/avatar/avatar.png"
      },
      {
        date: "Mar 20 2018",
        title: "比利·林恩的中场故事",
        imgSrc: "/images/post/米诺·索隆1366.jpg",
        content: "李安是一位绝不会重复自己的导演，本片将极富原创性，李安总所瞩目的新片《比利·林恩漫长的中场休息》，正式更名《半场无战事》。",
        reading: "112",
        collection: "96",
        avatar: "/images/avatar/avatar.png"
      }
    ]
    this.setData({ 
      posts_key: posts_content
    });
  }
})