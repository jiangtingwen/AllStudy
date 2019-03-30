##属性选择器
    
    /* 完全匹配 */
  /* li[class="list-3-item"] {
    color: red;
  } */
  /* 部分匹配 */
  /* ^ */   选择首字母为list的元素
  /* li[class^="list"] {
    color: red;
  } */
  /* $ */    选择最后一个字母为2-item的元素
  /* li[class$="2-item"] {
    color: red;
  } */

  包含匹配
  /* * */  
  [class*="-3-"] {   选择包含-3-的元素
    color: red;
  }
  
  <li class="list-1-item">1</li>
  <li class="list-2-item">2</li>
  <li class="list-3-item">3</li>
  <p class="list-3-item">4</p>
