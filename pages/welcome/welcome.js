Page({
  onTap: function() {
    // wx.navigateTo({
    //   url: "../posts/post"
    // });

    wx.redirectTo({
      url: "../posts/post"
    });
  },

  onUnload: function() {
    // console.log("welcome page is unload");
  },

  onHide: function () {
    // console.log("welcome page is hide");
  }
})