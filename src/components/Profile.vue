<template>
    <div class="Profile">
        <div class="top-wrapper">
            <div class="profile-box">
                <div class="profile-img">
                    <img src="@/assets/img/elm1.png">
                </div>
                <div class="profile-logo">
                    <p class="p0">登录/注册</p>
                    <p class="p1">登录后享受更多特权</p>
                </div>
                <div class="profile-icon">
                    <span class="iconfont icon-iconfontjiantou4"></span>
                </div>
            </div>
        </div>
        <div class="two-wrapper">
            <a>
                <p>
                    <svg fill="#ff5f3e" viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
                </p>
                <p class="p1">红包</p>
            </a>
            <a class="a2">
                <p>
                    <svg fill="#6ac20b" viewBox="0 0 48 48" id="profile-coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
                </p>
                <p class="p1">金币</p>
            </a>
        </div>
        <div class="profile-1reTe">
            <a>
                <span class="icon1 iconfont icon-dingwei"></span>
                <div>我的地址<span class="icon2 iconfont icon-iconfontjiantou4"></span></div>
            </a>
        </div>
        <div class="profile-1reTe">
            <a>
                <span class="jbsc-icon icon1 iconfont icon-gouwu"></span>
                <div>金币商城<span class="icon2 iconfont icon-iconfontjiantou4"></span></div>
            </a>
            <a>
                <span class="fxdxj-icon icon1 iconfont icon-libao"></span>
                <div>分享拿10元现金<span class="icon2 iconfont icon-iconfontjiantou4"></span></div>
            </a>
        </div>
        <div class="profile-1reTe">
            <a>
                <span class="icon1 iconfont icon-kefu"></span>
                <div>我的客服<span class="icon2 iconfont icon-iconfontjiantou4"></span></div>
            </a>
            <!--<a>
                <span class="icon1 iconfont icon-guizeshuoming"></span>
                <div>规则中心<span class="icon2 iconfont icon-iconfontjiantou4"></span></div>
            </a>-->
            <router-link to="/AboutUs">
                <span class="icon1 iconfont icon-guanyu"></span>
                <div>关于我们<span class="icon2 iconfont icon-iconfontjiantou4"></span></div>
            </router-link>
        </div>
        <div class="profile-2dyk_"><router-link to="/privacypolicy">隐私政策</router-link></div>
    </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
    .Profile{
        min-height: 100%;
        box-sizing: border-box;
        background: #f5f5f5;
        color: #333;
        font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
    }
    .profile-box{
        display: -webkit-flex;
        display: flex;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        padding: 22px 12px;
        color: #fff;
        -webkit-align-items: center;
        align-items: center;
    }
    .profile-img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .profile-img img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .profile-logo{
        flex: 1;
        padding-left: 15px;
    }
    .profile-logo .p0{
        font-size: 16px;
        font-weight: bold;
    }
    .profile-logo .p1{
        font-size: 12px;
    }
    .profile-icon{
        width: 18px;
        height: 100%;
    }
    .profile-icon span{
        font-size: 10px;
    }
    .two-wrapper{
        display: table;
        width: 100%;
        height:70px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
    .two-wrapper a{
        display: table-cell;
        vertical-align: middle;
        height: 70px;
        width: 50%;
        text-align: center;
    }
    .two-wrapper svg{
        width: 23px;
        height: 23px;
    }
    .two-wrapper .p1{
        color: #666;
        font-weight: 700;
        margin-top: 1px;
        font-size: 12px;
    }
    .two-wrapper .a2{
        border-left: 1px solid #ddd;
        margin-left: -1px;
    }
    .profile-1reTe{
        margin-top: 10px;
        padding-left:15px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        background: #fff;
    }
    .profile-1reTe a{
        display: flex;
        align-items: center;
    }
    .profile-1reTe div{
        color: #333;
        padding: 10px 0 10px 10px;
        flex: 1;
        font-size: 14px;
        line-height: 19px;
    }
    .profile-1reTe a:not(:last-child) div{
        border-bottom: 1px solid #eee;
    }
    .profile-1reTe span.icon1{
        color: #4AA5F0;
    }
    .profile-1reTe span.icon2{
        font-size: 8px;
        color: #bbb;
        float: right;
        margin-right: 10px;
        line-height: 19px;
    }
    .profile-1reTe span.jbsc-icon{
        color: #94D94A;
    }
    .profile-1reTe span.fxdxj-icon{
        color: #FC7B53;
    }
    .profile-2dyk_{
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .profile-2dyk_ a{
        font-size: 14px;
        color: #4da6f0;
    }
</style>
