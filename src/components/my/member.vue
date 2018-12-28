<template>
  <div class="member">
    <header>

      <h1 class="logo">
        <i class="left" @click="back"></i>
        <i class="right" @click="show=true"></i>
      </h1>
      <div class="search">
        <h2 class="admin-login">S.CN名鞋库 我的名鞋库</h2>
      </div>
      <div class="devide">
        <router-link to="/register" class="my"></router-link>
        <router-link to="/shopcart" class="cart"></router-link>
      </div>
    </header>
    <div class="top">
      {{add()}}
      <p class="one"><span class="username">{{username}}</span><span class="quit">退出</span></p>
      <p class="two"><span class="vipLevel">您的会员等级：</span><span class="vipMenber">注册会员</span></p>
      <p class="three"><span class="canUseScore">可用积分：</span><span class="score"> 0分</span></p>
    </div>
    <div class="middle">
      <ul>
        <li><router-link to="/member">我的订单</router-link></li>
        <li><router-link to="/member">我的评论</router-link></li>
        <li><router-link to="/member">我的收藏</router-link></li>
        <li><router-link to="/member">我的优惠券</router-link></li>
        <li><router-link to="/member">退换货服务</router-link></li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li><router-link to="/member">账户安全</router-link></li>
        <li><router-link to="/member">收货地址</router-link></li>
        <li><router-link to="/member">修改密码</router-link></li>
      </ul>
    </div>
    <div>
      <v-footInfo></v-footInfo>
    </div>
  </div>
</template>
<script>
  import footInfo from '../index/footerInfo.vue'
  export default {
    data(){
      return{
        username:this.$store.state.username
      }
    },
    methods:{
      add(){
        if (this.username.trim()==''){
          this.username=localStorage.getItem('username');
        }
      }
    },
    components:{
      'v-footInfo':footInfo
    },
    mounted(){

    }
  }

</script>
<style scoped>
  .member{
    background-color: #f0f0f0;
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
    background: url("../../assets/img/my/o-login.png")no-repeat center center;
    background-size: auto 50%;
  }
  .devide a.cart{
    background: url("../../assets/img/shopcart/cart.png")no-repeat center center;
    background-size: auto 50%;
  }
  .top,.middle,.bottom{
    margin: 15px;
    padding: 0 15px;
    border: 1px solid #d5d5d5;
    background: #fff;
    border-radius: 4px;
  }
  .one,.two,.three{
    padding: 8px 0px;
  }
  .one .username{
    color: #f90;
    margin-right: 15px;
  }
  .middle ul li,.bottom ul li{
    box-sizing: border-box;
    padding: 8px 0px;
    line-height: 30px;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
    font-size: 16px;
  }
  .middle ul li:after,.bottom ul li:after{
    content: '';
    display: inline-block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    right: 5%;
    margin-top: -4px;
    margin-right: -4px;
    background: url("../../assets/img/my/next.png")no-repeat;
  }
</style>
