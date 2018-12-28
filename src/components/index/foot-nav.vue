<template>
  <footer>
    <ul>
      <li><router-link to="/home"><p class="tagIcon icon home"></p><p class="tagName">首页</p></router-link></li>
      <li @click="tab6"><router-link to="/brand"><p class="tagIcon icon brand"></p><p class="tagName">品牌</p></router-link></li>
      <li @click="tab0"><router-link to="/devide"><p class="tagIcon icon devide"></p><p class="tagName">分类</p></router-link></li>
      <li><router-link to="/shopcart"><p class="tagIcon icon shopcart"></p><p class="tagName">购物车</p></router-link></li>
      <li><router-link to="/login"><p class="tagIcon icon my"></p><p class="tagName">我的</p></router-link></li>
    </ul>
  </footer>
</template>
<script>
  export default {
      methods:{
        tab6(){
          this.$store.state.tabIndex=6;
        },
        tab0(){
          this.$store.state.tabIndex=0;
        }
      }
  }
</script>
<style scoped>
  footer{
    width: 100%;
    height: 50px;
    background:url("../../assets/img/bgwhite.jpg");
    position: fixed;
    bottom: 0;
    min-width: 320px;
    max-width: 640px;
  }
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li{
    flex: 1;
    text-align: center;
  }
  .tagName{
    margin-top: .2rem;
    font-size: 13px;
    line-height: 1;
    color: #717075;
    width: 100%;

  }
  p.icon{
    width: 100%;
    height: 18px;
    background: url("../../assets/img/home.png")no-repeat center center;
    background-size:auto 125%;
  }
  p.home{
    background-image:url("../../assets/img/home.png");
  }
  p.brand{
    background-image:url("../../assets/img/brand.png");
  }
  p.devide{
    background-image:url("../../assets/img/class1.png");
  }
  p.shopcart{
    background-image:url("../../assets/img/14.shopcar.png");
  }
  p.my{
    background-image:url("../../assets/img/my.png");
  }
</style>

