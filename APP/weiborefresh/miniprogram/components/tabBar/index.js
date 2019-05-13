// components/tabBar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isIndex:{//判断当前是否是首页
      type:Boolean,
      value:false
    },
    isInner:{
      type:Boolean,
      value:false
    },
    maintitle:{
      type:String,
      value:''
    },
    mainImg:{
      type:String,
      value:''
    },
    mainFocus:{
      type:Number,
      value:null
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    shareIsOpen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goHome(e){
      if(e.currentTaret.dataset.hi){
        wx.redirectTo({
          url:'/pages/index/index',
        })
      }
    },
    goInfo(e){
      if(e.currentTaret.dataset.hi){
        wx.redirectTo({
          url:'/pages/info/info',
        })
      }else if(e.currentTaret.dataset.in){
        wx.navigateTo({
          url:'/pages/info/info'
        })
      }
     
      },
      openShare(){
        let shareIsOpen = !shareIsOpen,
        this.setData({
          shareIsOpen
        })

    }
  }
})
