//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude: 116.397390,
    latitude: 39.908860,
    scale: 18,
    markers: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        this.createMarkers(res);
      }
    })
  },
  createMarkers(res) {
    // 数量
    let ran  = Math.ceil(Math.random() * 20);
    let markers = [];
    for (let i = 0; i < ran; i ++) {
      let marker = {
        id: i,
        title: '去这里',
        iconPath: '../.././images/cycle.png',
        width: 52.5,
        height: 30,
      }
      let a = (Math.ceil( Math.random() * 99 )) 
      * 0.00002;
      let b = (Math.ceil( Math.random() * 99 )) 
      * 0.00002;
      let sign_a = Math.random();
      let sign_b = Math.random();
      marker.longitude = sign_a > 0.5 ?
      res.longitude + a : res.longitude - a;
      marker.latitude = sign_b > 0.5 ?
      res.latitude + b : res.latitude - b;
      markers.push(marker);
    }
    this.setData({
      markers
    });
    this.nearestBiycle(res);
  },
  nearestBiycle (res) {
    const { markers } = this.data;
    const distanceArr = markers.map((marker) => {
      const { longitude, latitude } = marker;
      let t = Math.sqrt(
        (longitude - res.longitude) * 
        (longitude - res.longitude)
        +
        (latitude - res.latitude) * 
        (latitude - res.latitude)
      )
      return t;
    })
    const minDistance = Math.min(...distanceArr);
    // 要对哪个 marker 设置气泡 (callout)
    const minIndex = distanceArr
    .findIndex(t => t === minDistance);
    let markerPath = `markers[${minIndex}].callout`
    this.setData({
      [markerPath]: {
        content: '离我最近',
        color: '#ffffff',
        fontSize: '16',
        padding: '10',
        bgColor: '#0082fc',
        display: 'ALWAYS',
        borderRadius: '50'
      }
    })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
