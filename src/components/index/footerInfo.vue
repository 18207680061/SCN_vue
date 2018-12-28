<template>
  <div class="footerInfo">
      <p class="logAndreg">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/home" class="home" v-if="showhome">首页</router-link>

      </p>
    <div class="serverMenu">
      <ul>
        <li><em class="niceGoods"></em><p>正品保证</p></li>
        <li><em class="baoyou"></em><p>满399包邮</p></li>
        <li><em class="freeBack"></em><p>自由退货</p></li>
        <li><em class="arrivePay"></em><p>货到付款</p></li>
      </ul>
    </div>
    <p class="contact">
        <span class="phoneIcon">
          <em></em>
          <b>4001162228</b>
        </span>
       <span class="weixinIcon">
          <em></em>
          <small>scnmall</small>
       </span>
    </p>
    <ul class="edition">
      <li class="touch">
        <span>触屏版</span>
        <em></em>
      </li>
      <li class="computer">
        <span>电脑版</span>
        <em></em>
      </li>
    </ul>
    <div class="copyRight">
      <ul>
        <li><router-link to="/home">意见反馈</router-link></li>
        <li><router-link to="/home">商圈</router-link></li>
        <li><router-link to="/home">问答</router-link></li>
        <li><router-link to="/home">标签</router-link></li>
        <li><router-link to="/home">主题</router-link></li>
        <li><router-link to="/home">长尾词</router-link></li>
      </ul>
      <p>©2008-2018 s.cn 名鞋库 闽ICP备08106896号</p>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .footerInfo{
    padding-bottom: 60px;
    background-color: #f0f0f0;
  }
  .logAndreg{
    background: #f7f7f7;
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    overflow: hidden;
  }
  .logAndreg a{
    color: #06c;
    font-size: 13px;
    padding: 0px 8px;
    display: inline-block;
  }
  .logAndreg a.home{
    float: right;
    color: #666;
  }
  .serverMenu ul{
    display: flex;
    justify-content:space-around;
    align-items: center;
  }
  .serverMenu ul li{
    flex: 1;
    height: 5.3rem;
    text-align: center;
    padding-top: 0.9rem;
    color: #666;
    font-size: 0.5rem;
    cursor: pointer;
  }
  .serverMenu ul li em{
    width: 2.3em;
    height: 2.3em;
    padding: 0.3rem;
    display: inline-block;
  }
  .serverMenu ul li .niceGoods{
    background: url("../../assets/img/niceSure.png")no-repeat;
    background-size: auto 100%;
  }
  .baoyou{
    background: url("../../assets/img/baoyou.png")no-repeat;
    background-size: auto 100%;
  }
  .freeBack{
    background: url("../../assets/img/tuihuo.png")no-repeat;
    background-size: auto 100%;
  }
  .arrivePay{
    background: url("../../assets/img/huodaofukuan.png")no-repeat;
    background-size: auto 100%;
  }
  .contact{
    background: #f7f7f7;
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    width: 90%;
    justify-content: flex-start;
    align-items: center;
  }
  .contact span{
    flex: 1;
    cursor: pointer;
  }
  .contact span em{
    display: inline-block;
    width: 10%;
    height: 38px;

  }
  .contact .phoneIcon em{
    background: url("../../assets/img/phoneIcon.png")no-repeat center bottom;
    background-size: auto 50%;

  }
  .contact .phoneIcon b{
    font-weight: 700;
    color: #c00;
    font-size: 1.3rem;
  }
  .contact .weixinIcon em{
    background: url("../../assets/img/weixinIcon.png")no-repeat center bottom;
    background-size: auto 50%;
  }
  .contact .weixinIcon small{
    font-size: 1.3rem;
    color: #646464;
  }
  .edition{
    width: 100%;
    overflow: hidden;
  }
  .edition li{
    width: 49%;
    border-radius: 5px;
    background-color: #dcdcdc;
    color: #666;
    text-align: center;
    font-size: 0.8rem;
    padding: 1.5%;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer;
  }
  .edition li.touch{
    float: left;
  }
  .edition li.computer{
    float: right;
  }
  .edition li em{
    width: 22px;
    height: 22px;
    display: inline-block;
  }
  .edition .touch em{
    background: url("../../assets/img/touch.png")no-repeat center bottom;
    background-size: auto 100%;
  }
  .edition .computer em{
    background: url("../../assets/img/computer.png")no-repeat center bottom;
    background-size: auto 100%;
  }
.copyRight{
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
}
  .copyRight ul{
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copyRight ul li{
    flex: 1;
    text-align: center;
    font-size: 0.8rem;
  }
  .copyRight ul li a{
    color: #999;
  }
  .copyRight p{
    padding: 10px;
    color: #999;
    font-size: 0.85rem;
    width: 100%;
    text-align: center;
  }
</style>
