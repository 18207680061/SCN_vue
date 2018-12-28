<template>
  <div class="prosList">
      <v-head></v-head>
      <div class="products">
        <img src="../../assets/img/pros/big.jpg" width="100%">
        <ul class="prosBox">
          <li v-for="(v,i) in list">
            <!--属性记得要加“：”-->
           <router-link to="/home">
             <p class="proImg"><img :src="v.proUrl"></p>
             <p class="proDes">{{v.proDes}}</p>
             <p class="proPrice"><strong class="newPrice">￥{{v.newPrice}}</strong><del class="oldPrice">￥{{v.oldPrice}}</del></p>
           </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  import headNav from '../index/head-nav.vue';
  export default {
    components:{
      'v-head':headNav
    },data(){
      return{
        list:[
          {
            id:0,
            proUrl:'./src/assets/img/pros/01.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:1,
            proUrl:'./src/assets/img/pros/02.jpg',
            proDes:'LINING李宁 跑步鞋 男 新基础黑+基础白',
            newPrice:259,
            oldPrice:539
          },{
            id:2,
            proUrl:'./src/assets/img/pros/03.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 男 白+白+银金属',
            newPrice:299,
            oldPrice:899
          },{
            id:3,
            proUrl:'./src/assets/img/pros/04.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:4,
            proUrl:'./src/assets/img/pros/05.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:5,
            proUrl:'./src/assets/img/pros/06.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:6,
            proUrl:'./src/assets/img/recommend/rm1.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:7,
            proUrl:'./src/assets/img/recommend/rm2.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:8,
            proUrl:'./src/assets/img/recommend/rm3.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:9,
            proUrl:'./src/assets/img/recommend/rm4.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:10,
            proUrl:'./src/assets/img/recommend/rm5.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },{
            id:11,
            proUrl:'./src/assets/img/recommend/rm6.jpg',
            proDes:'adidas阿迪达斯 跑步鞋 中性 黑色',
            newPrice:399,
            oldPrice:899
          },
        ]
      }
    }
  }
</script>
<style>
  .prosList{
    width: 100%;
  }
  .prosList .products{
    width: 100%;
  }
  .prosBox{
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-bottom: 50px;
  }
  .prosBox li{
    width: 50%;
    box-sizing: border-box;
    padding: 1rem 1rem .6rem;
    float: left;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-collapse: collapse;
    margin: -1px 0 0 -1px;
  }
  .prosBox li:hover{
    background-color: #fffbed;
  }
  .prosBox li .proImg, .prosBox li .proImg img{
    width: 100%;
  }
  .proDes{
    line-height: 32px;
    margin: 3px 0;
    font-size: 0.8rem;
  }
  .proPrice .newPrice{
    color: #c00;
    margin-right: 0.8rem;
    font-size: 1rem;
    font-weight: bold;
  }
  .proPrice .oldPrice{
    font-size:0.7rem;
    color: #999;
  }
</style>
