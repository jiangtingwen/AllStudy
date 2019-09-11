<template>
 <div>
   <slider></slider>
   <side></side>
   <takeDown></takeDown>
   <songs></songs>
 </div>
</template>

<script>
import Slider from "@/components/slider"
import Side from "@/components/side"
import TakeDown from '@/components/takeDown'
import Songs from '@/components/songs'
export default {
    data () {
      return {

      }
    },
    components:{
      'slider':Slider,
      "side":Side,
      'takeDown':TakeDown,
      'songs':Songs
    }
}
</script>

<style>

</style>
