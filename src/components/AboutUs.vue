<template>
    <div class="about-us">
        <div class="title">关于我们</div>
        <div class="content">
            学习Vue移动端开发，这是我的一个小Demo。
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutUs'
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
