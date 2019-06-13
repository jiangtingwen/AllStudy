<template>
  <div class="container">{{sendMsg}}{{sendAge}}{{sendDate}}</div>
</template>

<script>
export default {
  name: 'demoChild1',
  data () {
    return {
      
    }
  },
  props: {
    sendMsg: {
      type: String,
      require: true
    },
    sendAge: {
      type: String,
      require: true
    },
    sendDate: {
      type: String,
      require: true
    }
  },
}
</script>
