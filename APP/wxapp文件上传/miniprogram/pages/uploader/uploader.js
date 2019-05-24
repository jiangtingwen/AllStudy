const app = getApp()

Page({
  data: {
    files: []

  },
  chooseImage() {
    let that = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //指定上传的图片是原图还是压缩后的图片
      sourceType: ['album', 'camera'],  //指定上传的图片是本地相机还是本地相册
      success(res) {
        console.log(res)
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          const filePath = res.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.', a - 1)
          let c = filePath.substring(b + 1, a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/)

          wx.cloud.uploadFile({
            filePath,
            cloudPath,
            success(res) {
              console.log('上传成功', res)
            },
            fail(err) {
              console.log('上传失败', err)
            }
          })
        }


      }

    })
  },
  previewImage(e) {
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  }
})
