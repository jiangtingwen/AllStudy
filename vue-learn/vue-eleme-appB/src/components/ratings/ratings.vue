<template>
    <div class="content">
        <div class="left" >
            <div class="score">{{ratings.score}}</div>
            <div class="detail">
            <p class="all-score">综合评分</p>
            <p class="desc">高于周边商家{{ratings.rankRate}}</p>
            </div>
        </div>
        <div class="right" ref="Right" >
            <div class="attitude">
                <div class="server">服务态度</div>
                <div class="star1" ref="star1s">
                        <img src="../../../static/star/star24_half@2x.png" alt="">
                </div>
                <div class="get-score">{{serviceScore}}</div>
            </div>
            <div class="things">
                <div class="things-score">商品评分</div>
                <div class="star2" ref="star2s">
                    <img src="../../../static/star/star24_on@2x.png" alt="">
                </div>
                <div class="get-score1">{{ratings.foodScore}}</div>
            </div>
            <div class="time">
                <span class="arrive-time">送达时间</span>
                <span class="cost-time">{{ratings.deliveryTime}}分钟</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            ratings:[]
        }
    },
    _star (e) {
       let star1s = this.$refs.star1s;
       star1s.prepend('<img src="../../../static/star/star24_on@2x.png" alt="">')
      
    },
    created () {
        this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller')
         .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.ratings = res.data.data
        }
      })
    }

    
}
</script>

<style scoped>

    .content{
        display: flex;
        width: 100%;
        padding-top: 20px;
       
    }
    .score{
        font-size: 20px;
        text-align: center;
        color: yellow;
    }
    .detail{
        padding: 5px;
    }
    .all-score{
        font-size: 15px;
        color: black ;
        text-align: center;
        font-weight: 700;
    }
    .desc{
        font-size: 12px;
        padding: 5px;
    }
    .right{
        
    }
    .attitude{
        display:flex;
    }
    .things{
        display:flex;
    }
</style>

