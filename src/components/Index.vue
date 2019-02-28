<template>
    <div class="wrapper">
        <div class="view-wrapper">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <footer class="tab-navigation-wrapper">
            <div class="navigation">
                <router-link to="home" class="default-a" active-class="active"><span class="iconfont icon-shouye"></span>首页</router-link>
                <router-link to="discover" class="default-a" active-class="active"><span class="iconfont icon-faxian"></span>发现</router-link>
                <router-link to="order" class="default-a" active-class="active"><span class="iconfont icon-weibiaoti-"></span>订单</router-link>
                <router-link to="profile" class="default-a" active-class="active"><span class="iconfont icon-wode"></span>我的</router-link>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      currentActiveTabIndex: 0
    }
  }
}
</script>

<style scoped>
    .wrapper{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .view-wrapper{
        height: 0;
        width: 100%;
        flex: 1;
        background: #ffffff;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .view-wrapper>div{
        position: relative;
    }
    .tab-navigation-wrapper{
        flex: 0;
        position: relative;
        width: 100%;
        z-index: 9999;
        height: 48px;
        padding-top: 5px;
        background-color: #fff;
        box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
        box-sizing: border-box;
    }
    .tab-navigation-wrapper .navigation{
        display: flex;
    }
    .tab-navigation-wrapper .navigation a{
        flex: 1;
        font-size: 12px;
        color: #8e8e93;
        text-align: center;
    }
    .tab-navigation-wrapper .navigation a.active{
        color: #0089dc;
    }
    .tab-navigation-wrapper .navigation a span{
        font-size:20px;
        display: block;
        margin: auto auto;
    }
</style>
