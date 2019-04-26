'use strict'
const env = 'dev';

const defaultAlertMessage = '服务器开小差了';
const defaultShareText = {
    en: '默认的分享文案'
}

const defaultBarTitle = {
    en: 'ikcamp英语学习'
}

const defaultImg = {
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
  
}
 
let core = {
    env:env,
    defaultAlertMessage:defaultAlertMessage,
    defaultShareText:defaultShareText['en'],
    defaultBarTitle:defaultBarTitle['en'],
    defaultImg:defaultImg,
    isDev: env === 'dev',
    isProduction: env === 'production'
}
export default core  //抛出core这个对象,让需要的引用
