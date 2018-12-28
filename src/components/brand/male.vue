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
        name:['运动鞋','运动服'],
        pros:[
          {
            title:'休闲鞋',
            imgSrc:'./src/assets/img/male/nz1.jpg'
          },
          {
            title:'跑步鞋',
            imgSrc:'./src/assets/img/male/nz1.jpg'
          },
          {
            title:'帆布鞋',
            imgSrc:'./src/assets/img/male/nz1.jpg'
          },
          {
            title:'板鞋',
            imgSrc:'./src/assets/img/male/nz1.jpg'
          },
          {
            title:'篮球鞋',
            imgSrc:'./src/assets/img/male/nz1.jpg'
          },
          {
            title:'足球鞋',
            imgSrc:'./src/assets/img/male/nz1.jpg'
          }
        ],
        pros2:[
          {
            title:'T恤',
            imgSrc:'./src/assets/img/male/nz2.jpg'
          },
          {
            title:'卫衣',
            imgSrc:'./src/assets/img/male/nz2.jpg'
          },
          {
            title:'运动长裤',
            imgSrc:'./src/assets/img/male/nz2.jpg'
          },
          {
            title:'外套',
            imgSrc:'./src/assets/img/male/nz2.jpg'
          },
          {
            title:'夹克',
            imgSrc:'./src/assets/img/male/nz2.jpg'
          },
          {
            title:'羽绒服',
            imgSrc:'./src/assets/img/male/nz2.jpg'
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
