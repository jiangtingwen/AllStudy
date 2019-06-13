<template>
    <div class="alert">{{msg}}
          <Button type="success" @click="hidden">ok</Button>
    </div>
 
</template>

<script>
export default {
    name: 'Alert',
    // 从外接受的数据
    props: ['msg'],
    data() {
        return {

        }
    },
    methods:{
        hidden () {
            this.$emit('fromChild',false)  //往外发送信号
        }
    }
}
</script>

<style scoped>
.alert {
    background-color: yellow;
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
    /* 居于正中间 */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* 不会受影响 */
    z-index: 999;

}
</style>
