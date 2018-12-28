<template>
  <main>
    <header>
      <h1 class="logo"><i @click="back"></i></h1>
      <div class="search">
        <h3 class="admin-login">名鞋库-用户登录</h3>
      </div>
      <div class="devide">
        <router-link to="/register">注册</router-link>
      </div>
    </header>
    <div class="formBox">
       <p class="loginWay">
         <span @click="turnLeft">账号登录</span>
         <span @click="turnRight">短信验证登录</span>
         <em :class="{shiftRight:right,shiftLeft:left}"></em>
       </p>
      <div class="inputs">
        <ul>
          <li v-if="userNum"><span class="icon user"></span><input type="text" placeholder="请输入手机或E-mail" v-model="userVal"></li>
          <li v-if="userNum"><span class="icon pwd"></span>
            <input type="password" v-if="hidePassword" v-model="pwdVal" placeholder="请输入您的密码">
            <input type="text" v-if="showPassword" v-model="pwdVal" placeholder="请输入您的密码">
            <em class="hidePwd" v-if="hidePassword" @click="showPwd"></em>
            <em class="showPwd" v-if="showPassword" @click="hidePwd"></em>
          </li>
          <li v-if="userNum">
            <span class="icon key"></span>
            <p class="slideBar" id="slideBar">滑动验证
                <small class="slideMask" id="slideMask"></small>
                <i class="barBg" id="barBg"></i>
            </p>
          </li>
          <!--短信登录-->
          <li v-if="!userNum"><span class="icon userByPhone"></span><input type="text" placeholder="请输入手机号"></li>
          <li v-if="!userNum">
            <span class="icon user"></span>
            <p class="slideBar" id="slideBar2">滑动验证
              <small class="slideMask" id="slideMask2"></small>
              <i class="barBg" id="barBg2"></i>
            </p>
          </li>
          <li v-if="!userNum"><span class="icon key"></span><input type="text" placeholder="请输入手机验证码"><small class="sendCode">发送验证码</small></li>
        </ul>
      </div>
      <div class="remember">
        <p><em class="yes" v-show="showYes" @click="showYes=!showYes"></em>
        <input type="checkbox" @click="showYes=!showYes"><span>一个月内免登陆</span></p>
        <button id="#btnlogin" @click="login">登录</button>
      </div>
      <p class="forget">
        <span class="forgetPass">忘记密码？</span>
        <span class="registerNow">立即注册</span>
      </p>
    </div>
    <p class="msgLogin" v-if="userNum"><span>无需注册，手机短信直接登录</span></p>
    <div class="cooperation">
      <h6><span>合作账号登录</span></h6>
      <ul class="loginIcon">
        <li><router-link to="/home" class="alipay"></router-link></li>
        <li><router-link to="/home" class="qq"></router-link></li>
        <li><router-link to="/home" class="sina"></router-link></li>
      </ul>
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
        userNum:true,
        userVal:'',
        pwdVal:''
      }
    },
      methods:{
        turnLeft(){
          this.left=true;
          this.right=false;
          this.userNum=true
        },
        turnRight(){
          this.left=false;
          this.right=true;
          this.userNum=false

        }
        ,showPwd(){
          this.showPassword=true;
          this.hidePassword=false;
        },hidePwd(){
          this.showPassword=false;
          this.hidePassword=true
        },
        back(){
          this.$router.go(-1);
        },
        login(){
          if(this.userVal.trim()!=''&& this.pwdVal.trim()!=''){
            this.$router.push('/member');
            this.$store.state.username=this.userVal;
            localStorage.setItem('username',this.userVal)
          }else {
            alert('用户名或密码不能为空')
            }
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
  .loginWay{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
  }
  .loginWay span{
    display: inline-block;
    width: 50%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    float: left;
  }
  .loginWay em{
    transition: all 0.5s;
    width: 50%;
    height: 4.8px;
    background-color: #46CFB0;
    display: inline-block;
    position: absolute;
    bottom: 0px;
  }
.loginWay .shiftLeft{
   left: 0;
  transition: all 0.5s;

}
  .loginWay .shiftRight{
    right: 0;
    transition: all 0.5s;
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
  .sendCode{
    display: inline-block;
    width: 20%;
    text-align: center;
    background-color: limegreen;
    color: white;
    height: 36px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    margin-top: -18px;

    right: 10px;
    cursor: pointer;
    line-height: 36px;
    border-radius: 5px;
  }
  .inputs ul li span.key{
    background-position:5px -72px ;
  }
  .inputs ul li span.userByPhone{
    background-position:5px -385px ;
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
    overflow: hidden;
  }
  .remember p{
    float: left;
    width: 30%;
  }
  .remember .yes{
    position: absolute;
    z-index: 2;
    width: 30px;
    height: 30px;
    background: url("../../assets/img/sprite.png")no-repeat 1px -38px;
    background-size: 80px;
    cursor: pointer;
    left: 9px;
    top: 10px;
  }
  .remember span{
    color: #888;
    margin-top: -100px;
    margin-left: 5px;
    font-size: 0.8rem;
    display: inline-block;
    line-height: 42px;
  }
  .remember button{
    width: 70%;
    float: right;
    line-height: 42px;
    background: #f77373;
    color: #fff;
    font-weight: 700;
    border: 0;
    outline: 0;
  }
  input[type='checkbox']{
    width: 20px;
    height: 20px;
    background-color: #fff;
    -webkit-appearance:none;
    border: 1px solid #c9c9c9;
    outline: none;
    position: relative;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 10px;
  }
  .forget{
    overflow: hidden;
    width: 100%;
    color: #000;
    font-size: .8rem;
  }
  .forget .forgetPass{
    float: left;
  }
  .forget .registerNow{
    float: right;
  }
  .msgLogin{
    text-align: center;
    background-color: rgb(109, 178, 72);
    height: 40px;
    margin: 10px 10px 0px;
    line-height: 42px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    display: block;
  }
  .cooperation{
    background-color: #eee;
    text-align: center;
    width: 100%;
  }
  .cooperation h6{
    width: 100%;
    text-align: center;
    position: relative;

  }
  .cooperation h6 span{
    display: inline-block;
    color: #999;
    background-color: #eee;
    width: 20%;
    font-size: .8rem;
    position: relative;
    z-index: 2;
  }
  .cooperation h6:after{
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    position: relative;
    background-color: #000;
    top: -21px;
    left: 0;
  }
  .loginIcon{
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0 25px;
  }
  .loginIcon a{
    width: 60px;
    height: 60px;
    display: inline-block;
    background: url("../../assets/img/unionLoginIcon.png")no-repeat;
    background-size: auto 60%;
    background-color: #fff;
    border-radius:50% ;
    margin-right: 10px;
  }
  .loginIcon a.alipay{
    background-position: -64px 15px;
  }
  .loginIcon a.qq{
    background-position:13px 15px;
  }
  .loginIcon a.sina{
    background-position: -140px 15px;
  }
</style>
