<template>
  <div class="recommend">
    <h3>{{pros[0].name}}&gt</h3>
    <ul>
      <li v-for="n in 9"><router-link to="/home"><div class="item"><p><img :src="pros[0].imgSrc" width="75%"></p></div></router-link></li>
    </ul>
    <h3>{{pros[1].name}}&gt</h3>
    <ul>
      <li v-for="n in 9"><router-link to="/home"><div class="item"><p><img :src="pros[1].imgSrc" width="75%"></p></div></router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        pros:[
          {
            name:'运动休闲品牌',
            imgSrc:'./src/assets/img/allBrand/br1.jpg'
          },{
            name:'儿童品牌',
            imgSrc:'./src/assets/img/allBrand/br2.jpg'
          },
        ]
      }
    }
  }
</script>
<style scoped>
  .recommend{
    background-color: #f2f2f2;
  }
  .recommend h3{
    background-color: #f2f2f2;
    color: #999;
    padding: 3px;
  }
 .recommend ul{
   width: 100%;
   overflow: hidden;
   background-color: #f2f2f2;
 }
 .recommend ul li{
   width: 33%;
   float: left;
   box-sizing: border-box;
   padding: 5px;
 }
 .recommend ul li .item{
   text-align: center;
   background-color: #fff;
 }
  .recommend ul li .item .proname{
    width: 100%;
    background-color: #fff;
    font-size: 0.5em;
  }
</style>
