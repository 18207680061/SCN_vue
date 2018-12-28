<template>
  <div class="proDetails">
    <header>
      <h1 class="logo"><i @click="back"></i></h1>
      <div class="search">
        <ul>
          <li><a href="javascript:;">商品</a></li>
          <li><a href="javascript:;">详情</a></li>
          <li><a href="javascript:;">评论</a></li>
        </ul>
      </div>
      <div class="devide">
        <span class="dropdown"></span>
      </div>
    </header>
  </div>
</template>
<script>
  export default{}
</script>
<style scoped>
  header{
    width: 100%;
    height: 42px;
    min-width: 320px;
    max-width: 640px;
    background: url("../../assets/img/pros/header-bg.png")repeat-x;
    background-color: #efefef;
  }
  h1{
    width: 10%;
    height: 100%;
    min-width: 48px;
    float: left;
  }
  h1 i{
    width: 100%;
    height: 100%;
    float: left;
    background: url('../../assets/img/pros/goback.png') no-repeat center center;
    background-size: auto 60%;
  }
  .search{
    float: left;
    height: 100%;
    min-width: 48px;
    padding: 4px 0 0 0;
    width: 78%;
    position: relative;
    color: #666666;
    box-sizing: border-box;
    line-height: 42px;
  }
  .search ul{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search ul li{
    text-align: center;
    flex: 1;
  }
  .search ul li a{
    font-size: 0.8rem;
    color: #666;
  }
  .devide{
    width: 12%;
    height: 100%;
    float: left;
    position: relative;
    box-sizing: border-box;
    text-align: center;
  }
  .devide .dropdown{
    width: 100%;
    height: 100%;
    display:inline-block;
    position: relative;
  }
  .devide .dropdown:after{
    box-sizing: border-box;
    content: '';
    display: inline-block;
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid #888;
    border-radius: 100%;
    top: 22% ;
    left: 50%;
  }
  .devide .dropdown:before{
    content: "";
    width: 8px;
    height: 8px;
    border-top: 2px solid #888;
    border-right: 2px solid #888;
    position: absolute;
    top: 31%;
    left: 59%;
    transform: rotate(135deg);
    transition: transform .3s ease;
  }
</style>
