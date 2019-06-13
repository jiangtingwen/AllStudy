<template>
  <section>
    <div class="textscroll">
      <transition-group tag="ul" name="scrolltype">
        <li v-for="(item,index) in datalist" :key="index" v-show="index === count">
          <p>{{item.text}}</p>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import {setInterval} from 'timers'
export default {
 data() {
        return {
            count:0,
            datalist:[
                {text:'坚持'},
                {text:'不要脸'},
                {text:'坚持不要脸'}
            ]

        }
    },
    props:["scrolltypr"],
    created() {   
    setInterval(()=>{
    this.getText();
    },2000);
     },
         
      
        // setTimeout(()=>{
        //     this.count++;
        //     console.log(this.count)
        // },2000);
    
    methods:{
        getText() {
         let len = this.datalist.length;
         if(len === 0){
             return;
         }
         if(this.count === len-1){
             this.count = 0;
         } else{
             this.count++;
         }
        }
    }
}
</script>

<style>
ul {
    margin: 5px 0;
    padding: 0;
    background-color: #fff;
    overflow: hidden;
    height: 40px;

}
li{
    height: 40px;
    list-style-type: none;
    line-height: 1;
    overflow: hidden;
}
/* 从上滚动 */
.scrolltype-up-enter-active {
  transition: all 1s ease;
}
.scrolltype-up-leave-active {
  transition: all ls ease;
}
.scrolltype-up-enter {
  transform: translate3d(0, 100%, 0);
}
.scrolltype-up-leave-to {
  transform: translate3d(0, -100%, 0);
}
/* 从左滚动 */
.scrolltype-left-enter-active {
  transition: all 1s ease;
}
.scrolltype-left-leave-active {
  transition: all ls ease;
}
.scrolltype-left-enter {
  transform: translate3d(100%, 0, 0);
}
.scrolltype-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
