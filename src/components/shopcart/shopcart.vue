<template>
  <div class="shopcart">
    <header>
      <h1 class="logo">
        <i class="left" @click="back"></i>
        <i class="right" @click="show=true"></i>
      </h1>
      <div class="search">
        <h2 class="admin-login">S.CN名鞋库 我的购物车</h2>
      </div>
      <div class="devide">
        <router-link to="/register" class="my"></router-link>
        <router-link to="/shopcart" class="cart"></router-link>
      </div>
    </header>
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <aside class="list" v-show="show">
        <ul>
          <li class="home"><router-link to="/home"><span>首页</span></router-link></li>
          <li class="vipDay"><router-link to="/home"><span>会员日</span></router-link></li>
          <li class="freedomShoe"><router-link to="/home"><span>休闲鞋</span></router-link></li>
          <li class="freedomShirt"><router-link to="/home"><span>休闲服</span></router-link></li>
          <li class="runningCam"><router-link to="/home"><span>跑步馆</span></router-link></li>
          <li class="basketballCam"><router-link to="/home"><span>篮球馆</span></router-link></li>
          <li class="footballCam"><router-link to="/home"><span>足球馆</span></router-link></li>
          <li class="bags"><router-link to="/home"><span>包包/配件</span></router-link></li>
          <li class="outsideCam"><router-link to="/home"><span>户外馆</span></router-link></li>
          <li class="boyShoe"><router-link to="/home"><span>男鞋馆</span></router-link></li>
          <li class="childShoe"><router-link to="/home"><span>童鞋馆</span></router-link></li>
        </ul>
      </aside>
    </transition>
    <div class="mask" v-show="show" @click="show=false"></div>
    <div class="cartItem">
        <div class="cartItemBg"></div>
      <p class="noPros">您还没有挑选商品哦</p>
    </div>
    <p class="toChoose">
      <router-link to="/home">去挑选商品</router-link>
    </p>

    <v-footInfo></v-footInfo>
  </div>
</template>
<script>
  import footInfo from '../index/footerInfo.vue';
  export default {
    data(){
      return{
        show:false,
        showhome:true
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    },
    components:{
      'v-footInfo':footInfo
    }
  }
</script>
<style>
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.5;
  }
  .shopcart{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  header{
    height: 44px;
    width: 100%;
    max-width: 640px;
    border-bottom: 2px solid #900;
    background: #b91d23;
    overflow: hidden;
  }
  h1{
    width: 16%;
    height: 100%;
    float: left;
    padding: 5px ;
    box-sizing: border-box;
    border-right: 1px solid #900;
    display: flex;
    cursor: pointer;
  }
  h1 i.left{
    flex: 1;
    width: 50%;
    height: 100%;
    display: inline-block;
    background: url("../../assets/img/shopcart/back.png")no-repeat center center;
    background-size: auto 50%;
    border-right: 1px solid #900;
  }
  h1 i.right{
    flex: 1;
    width: 50%;
    height: 100%;
    display: inline-block;
    background: url("../../assets/img/shopcart/caticon.png")no-repeat center center;
    background-size: auto 50%;
  }
  .search{
    float: left;
    height: 100%;
    min-width: 48px;
    padding: 4px 0 0 0;
    width: 68%;
    position: relative;
    color: #666666;
    box-sizing: border-box;
    line-height: 42px;
  }
  .search .admin-login{
    text-align: center;
    height: 100%;
    border-radius: 5px;
    width: 100%;
    color: white;;
    font-size: 1.1rem;
    font-weight: 800;
  }
  .devide{
    width: 16%;
    height: 100%;
    float: left;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .devide a{
    flex: 1;
    display: inline-block;
    width: 50%;
    height: 100%;
    line-height: 42px;
    font-size: 0.75rem;
    border-left: 1px solid #900;

  }
  .devide a.my{
      background: url("../../assets/img/shopcart/user.png")no-repeat center center;
    background-size: auto 50%;
  }
  .devide a.cart{
    background: url("../../assets/img/shopcart/cart.png")no-repeat center center;
    background-size: auto 50%;
  }
  .list{
    background-color: #000;
    opacity: 0.9;
    width: 28%;
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 2;
  }
  .list ul{
    width: 100%;
  }
  .list ul li{
    height: 40px;
    line-height: 40%;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
    padding: 5% 0% 5% 30%;
    position: relative;
  }
  .list ul li:before{
    content: '';
    display: block;
    width: 30px;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    left: 10px;
    background: url('../../assets/img/shopcart/mlf_bg.png') no-repeat 0px 9px;
    background-size: 25px 450px;
  }
  .list ul li:after{
    background: url('../../assets/img/shopcart/mlf_bg.png') no-repeat 0px -424px;
    background-size: 25px 450px;
    content: '';
    display: block;
    width: 20px;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    right: 10px;
  }
  .list span{
    display: inline-block;
    line-height: 20px;
    float: left;
    font-weight: normal;
    color: white;
  }
  .cartItem{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  .cartItem .cartItemBg{
    height: 100px;
    width: 50%;
    margin: 0 auto;
    background: url("../../assets/img/cart-e.png")no-repeat center center;
    background-size: auto 100%;
  }
  .cartItem .noPros{
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #ccc;
    text-align: center;
  }
   .toChoose{
    width: 100%;
    margin: 15px;
    line-height: 42px;
    height: 42px;
    border-radius: 2px;
    background: #ff8a00;
    box-sizing: border-box;
  }
 .toChoose a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 16px;
    text-shadow: -1px -1px 1px #BD5C02;
    font-weight: 700;
    text-align: center;
  }
</style>
