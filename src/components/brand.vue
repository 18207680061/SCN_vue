<template>
<div class="brandBox">
  <div v-show="showMask" class="mask" @click="showMask=false"></div>
  <div class="brand-head">
    <router-link to="/home"><span class="back"><i></i></span></router-link>
    <div class="search">
        <input type="text" placeholder="输入关键字搜索">
        <em class="icon-search"><img src="../assets/img/search.png" height="70%" alt=""></em>
    </div>
    <div class="more">
      <span @click="showMask=!showMask"><img src="../assets/img/new_caticon.png" width="100%"></span>
    </div>
  </div>
 <div class="listBox">
   <div class="classList">
     <ul>
       <li v-for="(v,i) in classList" :class="{current:tabIndex==i}" @click="changeTab(i)">{{v}}<router-link :to="'/brand/'+v"></router-link></li>
     </ul>
   </div>
   <aside><router-view></router-view></aside>
 </div>
  <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    <ul v-show="showMask" class="mask-ul">
      <li><router-link to="/home"><span><img src="../assets/img/home.png" alt=""></span>首页</router-link></li>
      <li><router-link to="/brand"><span><img src="../assets/img/brand.png" alt=""></span>品牌</router-link></li>
      <li><router-link to="/shopcart"><span><img src="../assets/img/14.shopcar.png" alt=""></span>购物车</router-link></li>
      <li><router-link to="/my"><span><img src="../assets/img/my.png" alt=""></span>我的</router-link></li>
    </ul>
  </transition>
</div>
</template>
<script>

  export default{
    data(){
      return{
        showMask:false,
        tabIndex:0,
        classList:['为你推荐','男子','女子','配件','户外','童鞋童装','全部品牌']
      }
    },
      methods:{
        // back(){
        //   this.$router.go(-1);
        // },
        changeTab(i){
          this.tabIndex=i
        }
      },
    mounted(){
      this.tabIndex=this.$store.state.tabIndex;
      console.log(this.tabIndex)
    }
  }
</script>
<style scoped>
  .brand-head{
    background-color: #fff;
    height: 42px;
    /*min-width: 320px;*/
    /*max-width: 640px;*/
    zoom: 1;
  }
  .brand-head:after{
    content: '';
    display: inline-block;
    clear: both;
  }
  .back{
    width: 10%;
    height: 100%;
    min-width: 48px;
    float: left;
    position: relative;
  }
  .brandBox{
    position: relative;
  }
  .back i{
    /*width: 18px;*/
    /*height: 16px;*/
    width: 50%;
    height: 50%;
    float: left;
    background: url('../assets/img/new_back.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: 32%;
    left: 25%;
  }
  .search{
    float: left;
    height: 100%;
    padding: 4px 0 0 0;
    width: 78%;
    position: relative;
  }
  .icon-search{
    position: absolute;
    right: 0;
    top: 7.5px;
    height: 34px;
    cursor: pointer;
  }
  .search input{
    background-color: #eee;
    height: 34px;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 13px;
    width: 100%;
    text-indent: 1.5em;
  }
  .more{
    width: 6%;
    float: left;
    position: relative;
    margin: 1px 1px 1px 1px;
    height: 34px;
  }
  .more span{
    height: 15px;
    top: 10px;
    left: -2px;
    display: inline-block;
    position: absolute;
  }
.mask{
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 2;
  position: absolute;
  background-color: #fff;
}
  .mask-ul{
    position: absolute;
    right: 0;
    width: 25%;
    opacity: 1;
    top: 15%;
    z-index: 3;
    height: 20%;
    background-color: #fff;
  }
  .mask-ul li{
    line-height: 45px;
    border-bottom: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
  }
  .mask-ul li a{
    display: inline-block;
    position: relative;
    color: #9B9B9B;
    padding-left: 4px;

  }
  .mask-ul li img{
    width: 16%;
    vertical-align: middle;
    margin-right: 10px;
  }
  .listBox{
    overflow: hidden;
    width: 100%;
  }
  .classList{
    float: left;
    width: 21%;
  }
  .classList ul li{
    width: 100%;
    line-height: 3.5rem;
    font-size: 0.5em;
    text-align: center;
    padding: 2px 11px;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid #E5E5E5;
    border-right: 1px solid #E5E5E5;
    box-sizing: border-box;
    position: relative;
  }
  .classList ul li.current{
    background-color: #f2f2f2;
    border-left: 4px solid #E02B28;
  }
  .classList ul li a{
    display: inline-block;
    width: 100%;
    height: 3.5rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  aside{
    width: 78%;
    float: right;
  }

</style>
