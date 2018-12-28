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
    <h3>{{name[2]}}&gt</h3>
    <ul>
      <li v-for="(v,i) in pros3"><router-link to="/home"><div class="item"><p><img :src="v.imgSrc" width="75%"></p><p class="proname">{{v.title}}</p></div></router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        name:['户外鞋','户外服','户外包包'],
        pros:[
          {
            title:'跑步鞋',
            imgSrc:'./src/assets/img/outside/hw1.jpg'
          },
          {
            title:'徒步鞋',
            imgSrc:'./src/assets/img/outside/hw1.jpg'

          },
          {
            title:'休闲鞋',
            imgSrc:'./src/assets/img/outside/hw1.jpg'
          }
        ],
        pros2:[
          {
            title:'短袖T恤',
            imgSrc:'./src/assets/img/outside/hw2.jpg'
          },
          {
            title:'冲锋衣',
            imgSrc:'./src/assets/img/outside/hw2.jpg'
          },
          {
            title:'风衣',
            imgSrc:'./src/assets/img/outside/hw2.jpg'
          },
          {
            title:'皮肤衣',
            imgSrc:'./src/assets/img/outside/hw2.jpg'
          },
          {
            title:'抓绒服',
            imgSrc:'./src/assets/img/outside/hw2.jpg'
          },
          {
            title:'裤装',
            imgSrc:'./src/assets/img/outside/hw2.jpg'
          },
        ],
        pros3:[
          {
            title:'双肩包',
            imgSrc:'./src/assets/img/outside/hw3.jpg'
          },{
            title:'单肩包',
            imgSrc:'./src/assets/img/outside/hw3.jpg'
          },{
            title:'腰包',
            imgSrc:'./src/assets/img/outside/hw3.jpg'
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
