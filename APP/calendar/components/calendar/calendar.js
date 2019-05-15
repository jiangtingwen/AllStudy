// components/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    defaultValue: {
      type: String,
      value: ''
    },
    lastMonth: {
      type: String,
      value: ''
    },
    nextMonth: {
      type: String,
      value: ''
    },
    //星期数组
    weekText: {
      type: Array,
      value: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    year: 0,
    month: 0,
    date: 0,
    // 常量 用于匹配是否为当天
    YEAR: 0,
    MONTH: 0,
    DATE: 0,
    emptyGridsBefore: [],
    thisMonthDays: [],
    emptyGridsAfter: [],
    // 格式化日期
    format: ''
  },
  ready() {
    this.today()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化
    display(year, month, date) {
      this.setData({
        year,
        month,
        date,
        title: year + '年' + this.zero(month) + '月'
      })
      // 
      this.createDays(year, month)
    },
    // 默认选中当天，并且初始化
    today() {
      let DATE = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date(),
          year = DATE.getFullYear(),
          month = DATE.getMonth(),
          date = DATE.getDate(),
          select = year + '-' + this.zero(month) + '-' + this.zero(date)

          this.setData({
            format: select,
            select: select,
            year: year,
            month: month,
            date: date,
            YEAR: year,
            MONTH: month,
            DATE: date
          })
      this.display(year, month, date)
      // 发送事件监听
      this.triggerEvent('select', select)
    },
    // 绘制当月天数
    createDays(year, month) {
      let thisMonthDays = [],
          days = this.getThisMonthDays(year, month)
      for ( let i = 1; i <= days; i++) {
        thisMonthDays.push({
          date: i,
          dateFormat: this.zero(i),
          monthFormat: this.zero(month),
          week: this.data.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()]
        })
      }
      this.setData({
        thisMonthDays
      })
    },
    // 获取当月天数
    getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate()
    },
    select(e){
      let data = e.data.year + '-' + this.zero(this.data.month) + '-' + this.zero(date),
      this.setData({
        title:this.year + '年' + this.zero(this.data.month) + '月' + this.zero(date) + '日',
        select:select,
        year:this.data.year,
        month:data.month,
        date:date
      })
      this.triggerEvent
    },
    zero(e) {
      return e >= 10 ? e : '0' + e;
    }
  }
})
