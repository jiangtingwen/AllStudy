
var fun = {
  renderer: function (data) {
    var myTmpl = $.templates("#interpolationtmpl");
    var html = myTmpl.render({ "data": data });
    $("#main").html(html);
  },
  longLink: function () {//长链接
    var socket;
    if (!window.WebSocket) {
      window.WebSocket = window.MozWebSocket;
    }
    if (window.WebSocket) {
      socket = new WebSocket("ws://192.168.131.229:8001/websocket/2");
      socket.onmessage = function (res) {
        var json = JSON.parse(res.data);
        if (json.code === '200') {
          if (json.data.type === '1') {
            const data1 = json.data.data
            fun.jqAjax(data1.uuid)
          } else if (json.data.type === '2') {
            console.log(json.data.data, 'hhhhhh')
            const data2 = json.data.data
            // for(var i = 0; i < data2.length; i++) {
            //   console.log(data2[i],'sssssssssssssss') 
            // }
            fun.renderer(data2)
            fun.initScreen(screenConfig)
            fun.verticalScreen(screenConfig)
            fun.verticalPartScreen(screenConfig)
          } else if (json.data.type === '3') {
            // console.log(json.data.data, 'hhhhhhhhhhhhhhh')
            const data3 = json.data.data
            console.log(data3, '我是叫号')
            fun.speakAjax(data3.queueNo, data3.callStatus)
            fun.verticalAjax(data3.queueNo, data3.callStatus)
            fun.lacePartAjax(data3.queueNo, data3.callStatus)
            fun.voice("CN", data3.callContent);
            $('#alert').text(data3.callContent)
            fun.insertPerson(data3.callContent)
          }
        }
      };
      socket.onopen = function (event) {

        console.log(event.data);
        // speak("CN",event.data)
      };
      socket.onclose = function (event) {
        alert('连接已关闭')
        // ta.value = "WebSocket 关闭" + "\r\n";
        // var json = JSON.parse(event.data);
        // console.log(json);
      };
    } else {
      alert("您的浏览器不支持WebSocket协议！");
    }
  },

  // 切换主题方法
  theme: function (theme, mode) {
    console.log($('.main_content'), '我是加载前')
    $('.mode').remove()
    $("#interpolationtmpl").load(`./${theme}/html/${mode}.html`, function () {
      fun.loadjscssfile(`./${theme}/css/total.css`, 'css')
      fun.loadjscssfile(`./${theme}/css/${mode}.css`, 'css')
    });
  },

  // 播放声音方法
  voice: function (lang, dataA) {
    var synth = window.speechSynthesis;
    var time = setInterval(function () {
      var voices = speechSynthesis.getVoices()
      if (voices.length == 0) {
        voices = speechSynthesis.getVoices()
      } else {
        var utterThis = new window.SpeechSynthesisUtterance(dataA);
        // if ()
        var voices = speechSynthesis.getVoices().filter(
          function (voice) {
            return /Google/.test(voice.name) ? false : true;
          });
        utterThis.voice = voices.filter(
          function (voice) {
            return eval("/" + lang + "/").test(voice.lang);
          })[0];

        try {
          utterThis.lang = utterThis.voice.lang;
          // utterThis.pitch = pandaun(pitch)/10;
          utterThis.rate = 0.6;
          synth.speak(utterThis);
        } catch (e) {
          alert("缺少该语音包");
        }
        clearInterval(time);
      }
    }, 300)
  },
  jqAjax: function (id) {
    //  拿到uuid去请求设置的接口
    $.ajax({
      url: 'http://192.168.131.229:8001/api/webSocket/initConfig',
      type: 'get',
      data: {
        uuid: id
      },
      success: function (res) {
        fun.theme(res.data.data.screenConfig.screenTheme, res.data.data.screenConfig.screenLayot)
        console.log(res, 'gggggggggggggg')
        screenConfig = res.data.data.screenConfig
      }
    })
  },
  // 向102模板中的p标签插入叫号的人
  insertPerson: function (data) {
    var arr = []
    arr.push(data)
    for (var item in arr) {
      $('.top_first').eq(item).text(arr[item])
      // console.log(arr)
    }
  },
  
  // 当叫号数据推过来时,让正在叫的人去往相应的位置(101模板)
  speakAjax: function (id, status) {
    var curSpan = $('tr').find('span[data-id="' + id + '"]') //根据id拿到的span标签
    var curTd = $(curSpan).parent('td')  //根据id拿到的td标签
    var curTr = $(curTd).parent('tr')   //根据id拿到的tr标签
    if (status == 1) {     //正叫移动
      $(curSpan).remove()
      var number = screenConfig.waitingNumber
      $(curTd).children('span:lt(' + number + ')').css('display', 'inline')
      $(curTr).find('.go_check').children("span:first-child").remove()
      $(curTr).find('.go_check').prepend(curSpan)
    } else if ($(curTd).data("status") != 1 && status == 2) {   //候叫移动
      $(curSpan).remove()
      var numberWaiting = screenConfig.waitedNumber
      $(curTd).children('span:lt(' + numberWaiting + ')').css('display', 'inline')
      $(curTr).find('.wait_room').children("span:first-child").remove()
      $(curTr).find('.wait_room').prepend(curSpan)
    }
  },
  // 当叫号数据推过来时,让正在叫的人去往相应的位置(102模板)
  verticalAjax: function (id, status) {
    //  根据id拿到的li标签
    var curLi = $('.bottom_list').find('ul').find('div').find('li[data-id="' + id + '"]')
    // console.log(curLi, '我是li标签')
    var curLiFirst = $(curLi).parent('div').parent('ul').find('.bottom_title')
    // console.log(curLiFirst.next(), '第一个')
    // 正在叫的人所在的位置的盒子，判断是在哪个状态 
    var curDiv = $(curLi).parent('div').parent('ul').parent('div')
    // console.log($(curDiv).find('ul').find('li').eq(1), 'sssss')
    // console.log(curDiv, '我是盒子')
    // $(curLi).remove()
    num = screenConfig.waitedNumber
    // 正叫移动
    if (status === 1) {
      $(curLi).remove()
      // $(curLiFirst).next().children(':first').remove()
      $(curDiv).find('ul').find('li').eq(1).remove()
      $(curLiFirst).next().prepend(curLi)
      $(curDiv).find('ul').find('.wait_home2').children('li:lt(' + num + ')').show()
    } else {
      $(curLi).remove()
      $(curDiv).find('ul').children('li:lt(' + num + ')').show()
    }
  },
  // 当叫号数据推过来时,让正在叫的人去往相应的位置(103模板)
  lacePartAjax: function (id, status) {
    //  根据传进来的id拿到的li标签
    var curLi = $('.list_left').find('ul').find('li[data-id="' + id + '"]')
    console.log(curLi, '我是li标签')
    var curDiv = $(curLi).parent('div')
    console.log(curDiv, '我是div标签')
    var curUl = $(curDiv).parent('ul')
    console.log(curUl, '我是ul标签')
    var num1 = screenConfig.waitedNumber + 1
    var num2 = screenConfig.waitingNumber + 1
    // 正叫移动
    if (status === 1) {
      $(curLi).remove()
      $(curUl).find('.check3').find('li').eq(0).remove()
      $(curUl).find('.check3').prepend(curLi)
      $(curDiv).children('li:lt(' + num2 + ')').show()
    } else {
      $(curLi).remove()
      $(curUl).find('.waiting3').find('li').eq(0).remove()
      $(curUl).find('.waiting3').prepend(curLi)
      $(curDiv).children('li:lt(' + num1 + ')').show()
    }


  },
  // 根据配置数据初始化显示101模板客户端
  initScreen: function (config) {
    var checkNumber = config.checkingNumber - 1
    var waitingNumber = config.waitingNumber - 1
    var waitedNumber = config.waitedNumber - 1
    // 隐藏过号一栏
    $("tr[data-tr='过号']").css('display', 'none')
    // console.log(passTr)
    // 只显示后台配置的检查人数的前checkNumber条,以此类推
    $('tr').find('.go_check span:gt(' + checkNumber + ')').css('display', 'none')
    $('tr').find('.wait_room span:gt(' + waitingNumber + ')').css('display', 'none')
    $('tr').find('.wait_home span:gt(' + waitedNumber + ')').css('display', 'none')
  },
  // 根据配置数据初始化显示102模板客户端
  verticalScreen: function (config) {
    var checkNumber = config.checkingNumber - 1
    var checkNumber1 = config.checkingNumber
    var waitingNumber = config.waitingNumber
    var waitedNumber = config.waitedNumber
    var sum = checkNumber1 + waitingNumber + waitedNumber
    // console.log(sum)
    var waitRoom = config.waitingNumber - 1
    var passNumber = config.loseNumber - 1
    var waitHome = config.waitedNumber - 1
    var pass = config.loseNumber
    // 当后台配置数据后,服务器没有相应数据,生成空白标签（为了好看）
    var waitedDiv = $('.bottom_list').find('ul').find('.wait_home2')
    var sumDiv = $('.bottom_list').slice(0, 3)
    $('.bottom_list').find('.check2  li:gt(' + checkNumber + ')').css('display', 'none')
    $('.bottom_list').find('.wait_room2  li:gt(' + waitRoom + ')').css('display', 'none')
    $('.bottom_list').find('.wait_home2  li:gt(' + waitHome + ')').css('display', 'none')
    // console.log('sum:',sum)
    // var lis = $(sumDiv).find('ul').find('li')
    // console.log(lis)


    // $(screen)
    for (var i = 0; i < sumDiv.length; i++) {
      var result = $(sumDiv).filter(function(value){
       return ( $(value).find('ul').find('li').css('display')!= 'none' )
          
        
    })
    // console.log(result)
    // var arr = []
    // arr.push(result)
    // console.log(arr)
    //   if( $($(result)[i]).find('ul').find('li').length < sum + 1  ){
    //     for(j = 0; j < sum + 1 - $($(result)[i]).find('ul').find('li').length; j++) {
    //       $(sumDiv[i]).find('ul').find('.wait_home2').after("<li></li>")
    //     }
    //   }
  
    // console.log(result)  
        
      }
 
    if (checkNumber1 === 0) {
      $('.bottom_list').find('.check2 li').css('display', 'none')
    }
    if (waitingNumber == 0) {
      $('.bottom_list').find('.wait_room2  li').css('display', 'none')
    }
    if (waitedNumber == 0) {
      $('.bottom_list').find('.wait_home2  li').css('display', 'none')
    }
    if (pass == 0) {
      $('.pass').css('display', 'none')
    } else {
      $('.pass:gt(' + passNumber + ')').css('display', 'none')
    }
    $('.top_first:gt(2)').css('display', 'none')
  },

  // 103模板布局初始化客户端
  verticalPartScreen: function (config) {
    // 隐藏循环多出的过号一栏，避免对数据处理
    $("ul[data-type='过号']").css('display', 'none')
    $(".list_left").find('ul').eq(-2).find('li').eq(0).css('border-radius', '0 20px 0 0')
    $(".list_left").find('ul').eq(-2).find('li').eq(0).css('border-right', '1px solid rgba(255, 162, 204, 1)')
    var checkNumber = config.checkingNumber - 1
    var checkNumber1 = config.checkingNumber
    var waitingNumber = config.waitingNumber - 1
    var waitedNumber = config.waitedNumber - 1
    var waitingNumber1 = config.waitingNumber
    var waitedNumber1 = config.waitedNumber
    var pass = config.loseNumber
    var checkDiv = $('.list_left').find('ul .check3')
    for (var i = 0; i < checkDiv.length; i++) {
      if ($(checkDiv[i]).find('li').length < checkNumber1) {
        // 当后台配置数据后,服务器没有相应数据,生成空白标签（为了好看）
        for (var f = 0; f <= checkNumber1 - $(checkDiv[i]).find('li').length; f++) {
          $(checkDiv[i]).append("<li><li>")
          // 超过后台配置的检查等待候诊过号的配置的排队号则隐藏
          $('.list_left').find('ul').find('.check3 li:gt(' + checkNumber + ')').css('display', 'none')
          // 让左边li的高度与右边检查的状态的盒子的高度相对应
          var checkingHeight = $(checkDiv[0]).height()
          $('.checking').css('height', '' + checkingHeight + '')
        }
      }
      if (checkNumber1 === 0) {
        $('.list_left').find('ul').find('.check3 li').css('display', 'none')
        $('.checking').css('display', 'none')
      }
    }
    var waitingDiv = $('.list_left').find('ul .waiting3')
    for (var j = 0; j < waitingDiv.length; j++) {
      if ($(waitingDiv[j]).find('li').length < waitingNumber1) {
        for (var d = 0; d <= waitingNumber1 - $(waitingDiv[j]).find('li').length; d++) {
          $(waitingDiv[j]).append("<li></li>")
          $('.list_left').find('ul').find('.waiting3 li:gt(' + waitingNumber + ')').css('display', 'none')
          var readyHeight = $(waitingDiv[0]).height()
          $('.ready').css('height', '' + readyHeight + '')
        }
      }
      if (waitingNumber1 === 0) {
        $('.list_left').find('ul').find('.waiting3 li').css('display', 'none')
        $('.ready').css('display', 'none')
      }
    }
    var waitedDiv = $('.list_left').find('ul .waited3')
    for (var k = 0; k < waitedDiv.length; k++) {
      if ($(waitedDiv[k]).find('li').length < waitedNumber1) {
        for (var a = 0; a <= waitedNumber1 - $(waitedDiv[k]).find('li').length; a++) {
          $(waitedDiv[k]).append("<li><li>")
          $('.list_left').find('ul').find('.waited3 li:gt(' + waitedNumber + ')').css('display', 'none')
          var waitedHeight = $(waitedDiv[0]).height()
          $('.waiting').css('height', '' + waitedHeight + '')
        }

      }
      if (waitedNumber1 === 0) {
        $('.list_left').find('ul').find('.waited3 li').css('display', 'none')
        $('.waiting').css('display', 'none')
      }
    }
    if (pass === 0) {
      $('.list_right').find('ul li:gt(0)').css('display', 'none')
    } else {
      $('.list_right').find('ul li:gt(' + pass + ')').css('display', 'none')
    }

  },

  loadjscssfile: function (filename, filetype) {//加载文件
    if (filetype == "js") {
      var fileref = document.createElement("script");
      fileref.setAttribute("type", "text/javascript");
      fileref.setAttribute("src", filename);
    } else if (filetype == "css") {
      var fileref = document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.className = "mode";
      fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined") {
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  },

  translate: function (week) {//将英文星期转换为中文
    var whichday = undefined
    switch (week) {
      case 'Monday':
        whichday = '星期一'
        break
      case 'Tuesday':
        whichday = '星期二'
        break
      case 'Wednesday':
        whichday = '星期三'
        break
      case 'Thursday':
        whichday = '星期四'
        break
      case 'Friday':
        whichday = '星期五'
        break
      case 'Saturday':
        whichday = '星期六'
        break
      case 'Sunday':
        whichday = '星期日'
        break
    }
    return whichday
  },
  time: function () {//格式化时间
    setInterval(function () {
      var year = moment().format('YYYY/MM/DD')
      var nowHour = moment().format('HH:mm:ss')
      var whichweek = moment().format('dddd')
      var week = fun.translate(whichweek)
      $('.hour').text(nowHour)
      $('.year').text(year)
      $('.week').text(week)
    }, 1000)
  },

  wordNum: function (str) {//判断科室名字数是否大于7
    if (str.length <= 7) {
      return str
    } else {

      return str.slice(0, 7) + '...'
    }
  }

}