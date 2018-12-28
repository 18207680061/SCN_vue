<template>
  <header>
    <h1 class="logo">
      <i class="left" @click="back"></i>
      <i class="right"></i>
    </h1>
    <div class="search">
      <h2 class="admin-login">S.CN名鞋库 我的购物车</h2>
    </div>
    <div class="devide">
      <router-link to="/register" class="my"></router-link>
      <router-link to="/shopcart" class="cart"></router-link>
    </div>
  </header>
</template>
<script>
  export default {}
</script>
<style scoped>
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
</style>
