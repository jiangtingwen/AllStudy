<template>
 <div>
   <slider></slider>
   <side></side>
   <takeDown></takeDown>

 </div>
</template>

<script>
import Slider from "@/components/slider"
import Side from "@/components/side"
import TakeDown from '@/components/takeDown'

export default {
    data () {
      return {

      }
    },
    components:{
      'slider':Slider,
      "side":Side,
      'takeDown':TakeDown,
      
    }
}
</script>

<style>

</style>
