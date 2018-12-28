<template>
  <div class="recommend">
    <h3>{{name}}&gt</h3>
    <ul>
      <li v-for="(v,i) in pros"><router-link to="/home"><div class="item"><p><img :src="v.imgSrc" width="75%"></p><p class="proname">{{v.title}}</p></div></router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        name:'为您推荐',
        pros:[
          {
            title:'专柜同款',
            imgSrc:'./src/assets/img/recommend/rm1.jpg'
          },
          {
            title:'休闲专区',
            imgSrc:'./src/assets/img/recommend/rm2.jpg'
          },
          {
            title:'运动裤专区',
            imgSrc:'./src/assets/img/recommend/rm3.jpg'
          },
          {
            title:'篮球专区',
            imgSrc:'./src/assets/img/recommend/rm4.jpg'
          },
          {
            title:'足球专区',
            imgSrc:'./src/assets/img/recommend/rm5.jpg'
          },
          {
            title:'跑步专区',
            imgSrc:'./src/assets/img/recommend/rm6.jpg'
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
