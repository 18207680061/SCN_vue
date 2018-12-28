<template>
  <div class="content">
    <!--轮播图-->
    <div class="banner">
      <mt-swipe :auto="1500" @change="handleChange">
        <mt-swipe-item><img src="../../assets/img/banner1.jpg" width="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner2.jpg" width="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner3.jpg" width="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner4.jpg" width="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner5.jpg" width="100%"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div>
      <img src="../../assets/img/contentImg.jpg" width="100%">
      <img src="../../assets/img/contentList.jpg" width="100%">
    </div>
  <div class="proTab">
    <ul>
      <li><a href="">满400减50</a></li>
      <li><a href="">直降</a></li>
      <li><a href="">买一送一</a></li>
      <li><a href="">跑步鞋</a></li>
      <li><a href="">休闲鞋</a></li>
    </ul>
  </div>
   <div class="shoesList">
     <img src="../../assets/img/shoes.jpg" width="100%">
     <img src="../../assets/img/shoes2.jpg" width="100%">
     <img src="../../assets/img/shirts.jpg" width="100%">
     <img src="../../assets/img/shoes3.jpg" width="100%">
     <img src="../../assets/img/shoes4.jpg" width="100%">
     <img src="../../assets/img/shoes5.jpg" width="100%">
     <img src="../../assets/img/runningShoes.jpg" width="100%">
   </div>

  </div>

</template>
<script>
  export default {
      methods:{
        handleChange(index) {

        }
      }
  }
</script>
<style>
  .content{
    width: 100%;
  }
  .banner .mint-swipe{
    width: 100%;
  }
  .banner .mint-swipe-items-wrap{
    width: 100%;
    padding-bottom: 43.75%;
  }
  .banner .mint-swipe-indicator{
    opacity: 1;
    width: 12px;
    height: 12px;
    background-color: white;
  }
  .banner .is-active{
    background-color: grey;
  }
.proTab{
  display: -webkit-box;
  background: #f8f8f8;
  font-size: 12px;
  color: #666;
  padding: 0 10px;
}
  .proTab ul{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    width: 100%;
  }
  .proTab ul li{
    text-align: center;
    flex: 1;
  }
</style>
