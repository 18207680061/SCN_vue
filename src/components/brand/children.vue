<template>
  <div class="recommend">
    <h3>{{name[0]}}&gt</h3>
    <ul>
      <li v-for="(v,i) in pros"><router-link to="/home"><div class="item"><p><img :src="v.imgSrc" width="75%"></p><p class="proname">{{v.title}}</p></div></router-link></li>
    </ul>
    <h3>{{name[1]}}&gt</h3>
    <ul>
      <li v-for="(v,i) in pros2"><router-link to="/home"><div class="item"><p><img :src="v.imgSrc" width="75%"></p><p class="proname">{{v.title}}</p></div></router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        name:['专区','品牌'],
        pros:[
          {
            title:'新品专区',
            imgSrc:'./src/assets/img/children/tz1.jpg'
          },
          {
            title:'童装专区',
            imgSrc:'./src/assets/img/children/tz1.jpg'
          },
          {
            title:'清仓专区',
            imgSrc:'./src/assets/img/children/tz1.jpg'
          },
          {
            title:'婴童专区',
            imgSrc:'./src/assets/img/children/tz1.jpg'
          },
          {
            title:'小童专区',
            imgSrc:'./src/assets/img/children/tz1.jpg'
          },
          {
            title:'大童专区',
            imgSrc:'./src/assets/img/children/tz1.jpg'
          }
        ],
        pros2:[
          {
            title:'adidas',
            imgSrc:'./src/assets/img/children/tz2.jpg'
          },
          {
            title:'nike',
            imgSrc:'./src/assets/img/children/tz2.jpg'
          },
          {
            title:'斯凯奇',
            imgSrc:'./src/assets/img/children/tz2.jpg'
          },
          {
            title:'PUMA',
            imgSrc:'./src/assets/img/children/tz2.jpg'
          },
          {
            title:'三叶草',
            imgSrc:'./src/assets/img/children/tz2.jpg'
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
