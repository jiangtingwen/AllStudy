<template>
<button class="el-button"
:disabled="buttonDisabled?'disabled':''"
:class="[
type?'el-button--' + type: '',
size?'el-button--'+size: '',
{
    'is-disabled':buttonDisabled
}
 ]"
@click="handleClick"
  >
  <slot></slot>
</button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    type: {
      string: String,
      default: 'default'
    },
    size: String
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style>

</style>