Page({
  data: {
    text: "This is page data.",
    date: "Mar 19 2018",
    title: "正是虾肥蟹壮时"
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log("onLoad");
    var post_content1 = {
      date: "Mar 19 2018",
      title: "正是虾肥蟹壮时",
      post_img: "/images/post/米诺·路飞1366.jpg",
      content: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“鳌封嫩玉双双满”",
      view_num: "112",
      collect_num: "96",
      author_img: "/images/avatar/avatar.png"
    }
    this.setData(post_content1);
  },
  onReady: function () {
    // Do something when page ready.
    console.log("onReady");
  },
  onShow: function () {
    // Do something when page show.
    console.log("onShow");
  },
  onHide: function () {
    // Do something when page hide.
    console.log("onHide");
  },
  onUnload: function () {
    // Do something when page close.
    console.log("onUnload");
  }
})