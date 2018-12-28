<template>
  <main>
    <header>
      <h1 class="logo"><i @click="back"></i></h1>
      <div class="search">
        <h3 class="admin-login">名鞋库-用户注册</h3>
      </div>
      <div class="devide">
        <router-link to="/login">登录</router-link>
      </div>
    </header>
    <div class="formBox">

      <div class="inputs">
        <ul>
          <li><span class="icon user"></span><input type="text" placeholder="请输入手机或E-mail"></li>
          <li><span class="icon pwd"></span>
            <input type="password" v-if="hidePassword" v-model="msg" placeholder="请输入您的密码">
            <input type="text" v-if="showPassword" v-model="msg" placeholder="请输入您的密码">
            <em class="hidePwd" v-if="hidePassword" @click="showPwd"></em>
            <em class="showPwd" v-if="showPassword" @click="hidePwd"></em>
          </li>
          <li>
            <span class="icon key"></span>
            <p class="slideBar" id="slideBar">滑动验证
              <small class="slideMask" id="slideMask"></small>
              <i class="barBg" id="barBg"></i>
            </p>
          </li>
        </ul>
      </div>
    </div>
      <div class="remember">
          <button>注册</button>
      </div>
  </main>
</template>
<script>
  export default {
    data(){
      return{
        right:false,
        left:true,
        showYes:false,
        showPassword:false,
        hidePassword:true,
        msg:'',
      }
    },
    methods:{
      turnLeft(){
        this.left=true;
        this.right=false;
      },
      turnRight(){
        this.left=false;
        this.right=true;

      }
      ,showPwd(){
        this.showPassword=true;
        this.hidePassword=false;
      },hidePwd(){
        this.showPassword=false;
        this.hidePassword=true
      },back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  header{
    width: 100%;
    height: 42px;
    min-width: 320px;
    max-width: 640px;
  }
  h1{
    width: 10%;
    height: 100%;
    min-width: 48px;
    float: left;
    background-color: #f0f0f0;
  }
  h1 i{
    width: 100%;
    height: 100%;
    float: left;
    background: url('../../assets/img/sprite.png') no-repeat 22px -212px;
    background-size: 55px auto;
  }
  .search{
    float: left;
    height: 100%;
    min-width: 48px;
    padding: 4px 0 0 0;
    width: 78%;
    position: relative;
    background-color: #f9f9f9;
    color: #666666;
    box-sizing: border-box;
    line-height: 42px;
  }
  .search .admin-login{
    text-align: center;
    height: 100%;
    border-radius: 5px;
    width: 100%;
    color: #666666;
    font-size: 0.8rem;
  }
  .devide{
    width: 12%;
    float: left;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    background-color: #ffe5e5;
  }
  .devide a{
    line-height: 42px;
    font-size: 0.75rem;
    color: #e98686;
  }
  .formBox{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    background: url("../../assets/img/mscn_logbg.jpg")no-repeat;
  }
  .inputs{
    width: 100%;
    background: rgba(255,255,255,.5);
    margin-top: 10px;
  }
  .inputs ul{
    width: 100%;
  }
  .inputs ul li{
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: relative;
    border-bottom: 1px solid #d5d5d5;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .slideBar{
    border: 1px solid red;
    text-align: center;
    font-size: 0.8rem;
    height: 90%;
    width: 85%;
    vertical-align: middle;
    position: absolute;
    left: 10%;
  }
  .barBg{
    width: 0;
    height: 100%;
    background-color: lime;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slideMask{
    width: 42px;
    height: 100%;
    background-color: black;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    top: 0px;
    left: 0px;

  }
  .inputs ul li span.icon{
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    height: 100%;
    width: 10%;
    background: url("../../assets/img/sprite.png")no-repeat 5px 12px;
    background-size: 85px;
  }

  .inputs ul li span.key{
    background-position:5px -72px ;
  }

  .inputs ul li em{
    position: absolute;
    display: inline-block;
    right: 3%;
    top: 0;
    height: 100%;
    width: 10%;
    background: url("../../assets/img/sprite.png")no-repeat 0px -104px;
    background-size: 61px;
  }
  .inputs ul li em.showPwd{
    background-position: 0px -145px;
  }
  .inputs ul li input{
    width: 90%;
    height: 50%;
    border: 0;
    outline: 0;
    background-color: transparent;
    text-indent: 10%;
  }
  .remember{
    margin: 20px 0 10px;
    vertical-align: middle;
    width: 100%;
    position: relative;
    text-align: center;
  }
  .remember button{
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    line-height: 42px;
    background: #6db248;
    color: #fff;
    font-weight: 700;
    border: 0;
    outline: 0;
    font-size: 1rem;
  }

</style>
