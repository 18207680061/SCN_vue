<template>
  <header>
      <h1 class="logo"><i></i></h1>
      <div class="search">
        <form action="">
          <input type="text" placeholder="输入关键字搜索">
          <em class="icon-search"><img src="../../assets/img/search.png" width="70%" alt=""></em>
        </form>
      </div>
    <div class="devide">
      <router-link to="/devide"><img src="../../assets/img/class.png" alt="" width="20px"><br><span>分类</span></router-link>
    </div>
  </header>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  header{
    background-color: #B70110;
    height: 42px;
    min-width: 320px;
    max-width: 640px;
  }
  h1{
    width: 18%;
    height: 100%;
    min-width: 48px;
    float: left;
  }
  h1 i{
    width: 66px;
    height: 36px;
    float: left;
    background: url('../../assets/img/logo_n138.jpg') no-repeat 5px 4px;
    background-size: auto 85%;
  }
  .search{
    float: left;
    height: 100%;
    min-width: 48px;
    padding: 4px 0 0 0;
    margin: 0px 8px 0px 3px;
    width: 70%;
    position: relative;
  }
  .icon-search{
    position: absolute;
    right: 0;
    top: 7.5px;
    width: 42px;
    height: 34px;
    cursor: pointer;
  }
  .search input{
    height: 34px;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 13px;
    width: 100%;
    text-indent: 1.5em;
  }
  .devide{
    width: 6%;
    float: left;
    position: relative;
    margin: 1px 1px 1px 1px;
  }
  .devide a span{
    color: white;
    font-size: 12px;
    position: absolute;
    top: 22px;
    left: -4px;
    display: inline-block;
    width: 25px;
  }
</style>
