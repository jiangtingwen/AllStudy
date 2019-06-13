<template>
  <div class="container">
    <child :send-msg="test"><ild>
  </div>
</template>

<script>
import child from '.ild.vue'
export default {
  name: 'demo1',
  data () {
    return {
      test: {
      message: '我很帅',
      date: '2019-6-11',
      age: '18'
      }
    }
  },
  components: {
    child
  }
}
</script>
