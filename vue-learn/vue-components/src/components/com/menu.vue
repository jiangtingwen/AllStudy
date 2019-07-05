<template>
  <div class="menu">
    {{message}}
    <!-- {{name.name}} -->
    {{app.user}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  inject: ['app'],
  data () {
    return {
      message: 'aaaaaaa'
    }
  },
  created() {
    let self = this
    bus.$on('todo', (val) => {
      console.log(val)
      self.message = val
    })
  }
}
</script>

<style>

</style>
