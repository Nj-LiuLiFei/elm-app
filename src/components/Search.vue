<template>
    <div class="search">
        <div class="top">
            <div class="top-wrap">
                <div class="l"><i class="iconfont icon-xiangzuo"></i></div>
                <div class="c">
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="输入商家、商品名称">
                </div>
                <div class="submit">搜索</div>
            </div>
        </div>
        <div class="title">历史搜索<i class="iconfont icon-shanchu"></i></div>
        <ul class="list-unstyled search-list clearfix">
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
        </ul>
        <div class="title">热门搜索</div>
        <ul class="list-unstyled search-list clearfix">
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
            <li>黄焖鸡</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
    .search{
        padding: 0 10px;
    }
    .top-wrap{
        display: flex;
        height: 45px;
        align-items: center;
    }
    .top-wrap .l i{
        color: #999;
    }
    .top-wrap .c{
        position: relative;
        flex: 1;
        padding-left: 15px;
    }
    .top-wrap .c input{
        width: 100%;
        outline: none;
        border: none;
        background-color: #f8f8f8;
        padding: 5px;
        text-indent: 20px;
    }
    .top-wrap .c i{
        position: absolute;
        top: 50%;
        margin-top: -8px;
        left: 20px;
    }
    .top-wrap .submit{
        width: 35px;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
    }
    .title{
        color: #666;
        font-weight: 700;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        margin-top: 5px;
    }
    .title i{
        float: right;
        color: #cecece;
        font-size: 12px;
    }
    .search-list li{
        float: left;
        color: #666;
        background-color: #f7f7f7;
        font-size: 12px;
        padding: 4px 8px;
        margin-right: 10px;
        margin-top: 15px;
    }
</style>
