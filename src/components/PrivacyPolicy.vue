<template>
    <div class="privacy-policy">
        <div class="title">隐私政策</div>
        <div class="content">
            本软件不会向用户索要银行卡密码等一些重要数据，请大家提高安全意识
        </div>
    </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
    .title{
        height: 40px;
        line-height: 40px;
        background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
        background-image: -webkit-linear-gradient(left,#0af,#0085ff);
        background-image: linear-gradient(90deg,#0af,#0085ff);
        text-align: center;
        color: #fff;
        font-weight: 700;
    }
    .content{
        padding: 10px;
    }
</style>
