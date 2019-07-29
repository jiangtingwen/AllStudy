<template>
 <div>
   <slider></slider>
   <side></side>
 </div>
</template>

<script>
import Slider from "@/components/slider"
import Side from "@/components/side"
export default {
    data () {
      return {

      }
    },
    components:{
      'slider':Slider,
      "side":Side
    }
}
</script>

<style>

</style>
