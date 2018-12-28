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
        name:'配件',
        pros:[
          {
            title:'双肩包',
            imgSrc:'./src/assets/img/parts/px1.jpg'
          },
          {
            title:'单肩包',
            imgSrc:'./src/assets/img/parts/px2.jpg'
          },
          {
            title:'腰包',
            imgSrc:'./src/assets/img/parts/px3.jpg'
          },
          {
            title:'护腿板',
            imgSrc:'./src/assets/img/parts/px4.jpg'
          },
          {
            title:'球类',
            imgSrc:'./src/assets/img/parts/px5.jpg'
          },
          {
            title:'其他',
            imgSrc:'./src/assets/img/parts/px6.jpg'
          }
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
