// 去除标签，输出内容
const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>';
//正则  replace splice  规则
//[]范围匹配  g全局 ^取非 *匹配前面的子表达式零次或多次
const stripHTMLTags = str => str.replace(/<[^>]*>/g,'');
