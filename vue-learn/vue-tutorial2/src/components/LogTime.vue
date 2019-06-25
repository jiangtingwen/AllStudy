<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="number"
          class="form-control"
          v-model="totalTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
          type="text"
          class="form-control"
          v-model="comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>
<style>

</style>
<script>

    export default {
        name : 'LogTime',
        data() {
            return {
                date : '',
                totalTime : '',
                comment : ''
            }
        },
        methods:{
          save() {
            const plan = {
              name : '蜗牛',
              image : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561436729346&di=bd0a1454881aa8692bf8f332577155c6&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F09%2F13%2F590325e2e6786_610.jpg',
              date : this.date,
              totalTime : this.totalTime,
              comment : this.comment
            };
            this.$store.dispatch('savePlan', plan)
            this.$store.dispatch('addTotalTime', this.totalTime)
            this.$router.go(-1)
          }
        }
    }
</script>
