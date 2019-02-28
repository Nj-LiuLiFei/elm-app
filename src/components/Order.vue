<template>
    <div class="Order">
        <section>
            <div class="ordercard" v-on:click="navigationOrderDetail">
                <div class="ordercard-body">
                    <div class="ordercard-avatar" v-on:click.stop="navigationStore">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton" v-on:click.stop="navigationStoreBuy">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
            <div class="ordercard">
                <div class="ordercard-body">
                    <div class="ordercard-avatar">
                        <img src="@/assets/img/daed65f5aa000f18edfe33aaad139png.png">
                    </div>
                    <div class="ordercard-content">
                        <div class="ordercard-head">
                            <div class="title">
                                <div class="name">
                                    <span class="content">老乡鸡(南京金宝商业广场店)</span>
                                    <i class="iconfont icon-iconfontjiantou4"></i>
                                </div>
                                <p class="status">订单已送达</p>
                            </div>
                            <p class="datetime">2019-01-18 21:03</p>
                        </div>
                        <div class="ordercard-detail">
                            <p class="detail">
                                <span>金汤酸菜鱼</span>
                                <span>等6件商品</span>
                            </p>
                            <p class="price">¥29.00</p>
                        </div>
                    </div>
                </div>
                <div class="ordercard-bottom">
                    <button class="cardbutton">再来一单</button>
                </div>
            </div>
        </section>
        <p class="orderbody-bottom">查看三个月前的外卖订单<i class="iconfont icon-down"></i></p>
    </div>
</template>

<script>
export default {
  name: 'Order',
  methods: {
    navigationOrderDetail: function (e) {
      console.log('导航到订单详情：' + e)
    },
    navigationStore: function (e) {
      console.log('导航到店铺：' + e)
    },
    navigationStoreBuy: function (e) {
      console.log('再来一单：' + e)
    }
  }
}
</script>

<style scoped>
    .Order{
        background-color: #f5f5f5;
    }
    .Order section{
        overflow: hidden;
    }
    .ordercard{
        display: block;
        margin-bottom: 15px;
        padding: 15px 15px 0 15px;
        background-color: #fff;
    }
    .ordercard .ordercard-bottom{
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid #eee;
        padding: 10px 0px;
    }
    .ordercard-bottom .cardbutton{
        border: 1px solid #2395ff;
        background-color: transparent;
        outline: none;
        color: #2395ff;
        padding: 5px 6px;
        border-radius: 3px;
        font-size: 13px;
    }
    .ordercard-body{
        display: flex;
    }
    .ordercard-avatar{
        padding-right: 15px;
    }
    .ordercard-avatar img{
        width: 50px;
        height: 50px;
        border-radius: 4px;
        border: 1px solid #eee;
    }
    .ordercard-content{
        flex: 1;
    }
    .ordercard-head{
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    }
    .ordercard-head .title{
        display: flex;
        align-items: center;
        color: #333;
        font-size: 16px;
        height:35px;
        line-height:35px;
    }
    .title .name{
        flex: 1;
        width: 0;
        display: flex;
        color: #333;
    }
    .name .content{
        display: block;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title .iconfont{
        font-size: 12px;
        color: #999;
    }
    .ordercard-head .datetime{
        font-weight: 400;
        color: #999;
        font-size: 12px;
    }
    .ordercard-head .status{
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
        width: 80px;
    }
    .ordercard-detail{
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 10px 0;
    }
    .ordercard-detail .detail{
        color: #666;
    }
    .ordercard-detail .price{
        color: #333;
        font-weight: 700;
    }
    .orderbody-bottom{
        text-align: center;
        color: #999;
        font-size: 12px;
        padding-bottom: 15px;
    }
</style>
