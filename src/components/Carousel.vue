<template>
    <div class="carousel">
        <v-touch v-on:swipeleft="onSwipeLeftEvent" v-on:swiperight="onSwipeRightEvent" style="height: 100%">
            <ul class="list-unstyled carousel-img-list clearfix" :style="transformStyle" :id="config.id">
                <li v-for="(item,index) in config.imgArray" :key="index" :style="{left:index*100+'%'}">
                    <img :src="item">
                </li>
            </ul>
        </v-touch>
        <div class="list-unstyled indicators-list">
            <span v-for="(item,index) in config.imgArray" :key="index" v-if="index > 0 && index < config.imgArray.length-1" v-bind:class="{ active: index == currentIndex }"></span>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Carousel',
  props: ['config'],
  methods: {
    initInterval: function () {
      this.currentIndex++
      this.transformStyle = 'transition: all 1s ease 0s;transform: translateX(-' + (this.currentIndex) * 100 + '%);'
    },
    stopCarousel: function () {
      if (this.setIntervalId != null) {
        clearInterval(this.setIntervalId)
      }
    },
    transitionEndEvent: function () {
      console.log('动画结束了')
      if (this.currentIndex >= this.config.imgArray.length - 1) {
        this.currentIndex = 1
        this.transformStyle = 'transform: translateX(-100%);'
      } else if (this.currentIndex <= 0) {
        this.currentIndex = this.config.imgArray.length - 2
        this.transformStyle = 'transform: translateX(-' + (this.config.imgArray.length - 2) * 100 + '%);'
      }
    },
    onSwipeLeftEvent: function () {
      console.log('左滑动')
      this.stopCarousel()
      this.currentIndex++
      this.transformStyle = 'transition: all 0.5s ease 0s;transform: translateX(-' + (this.currentIndex) * 100 + '%);'
      this.setIntervalId = setInterval(this.initInterval, 4000)
    },
    onSwipeRightEvent: function () {
      console.log('右滑动 ')
      this.stopCarousel()
      this.currentIndex--
      this.transformStyle = 'backface-visibility: hidden;transition: all 0.5s ease 0s;transform: translateX(-' + (this.currentIndex) * 100 + '%);'
      this.setIntervalId = setInterval(this.initInterval, 4000)
    }
  },
  data () {
    return {
      'transformStyle': '',
      'currentIndex': 0,
      'setIntervalId': null
    }
  },
  created: function () {
    this.config.imgArray.unshift(this.config.imgArray[this.config.imgArray.length - 1])
    this.config.imgArray.push(this.config.imgArray[1])
    this.currentIndex++
    this.transformStyle = 'transform: translateX(-100%);'
  },
  beforeMount: function () {
  },
  activated: function () {
    let el = document.getElementById(this.config.id)
    if (el != null) {
      el.removeEventListener('webkitTransitionEnd', this.transitionEndEvent, false)
      el.addEventListener('webkitTransitionEnd', this.transitionEndEvent, false)
    }
    console.log('无缝轮播激活了')
    this.setIntervalId = setInterval(this.initInterval, 4000)
    /* axios.post('http://localhost:8088/apis/film/add',
      {'name': 'liulifei'})
      .then(response => (this.info = response))
    axios.get('http://localhost:8088/apis/film/add2',
      {params: {'name': '123123'}})
      .then(response => (this.info = response)) */

    /* axios.get('http://localhost:8088/BeautyProServer/api/v1/logout?username=1061334689@qq.com',
      {
        'username': '1061334689@qq.com'
      })
      .then(response => (this.info = response))
    axios.post('http://localhost:8088/BeautyProServer/api/v1/logout2?username=1061334689@qq.com',
      {
        'username': '1061334689@qq.com'
      })
      .then(response => (this.info = response))
    axios.post('http://localhost:8088/BeautyProServer/api/v1/validate/email?username=1061334689@qq.com',
      {
        'username': '1061334689@qq.com'
      })
      .then(response => (this.info = response)) */
  },
  deactivated: function () {
    console.log('无缝轮播停用了')
    clearInterval(this.setIntervalId)
  }
}
</script>

<style scoped>
    .carousel{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .carousel .carousel-img-list{
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .carousel .carousel-img-list img{
        width: 100%;
        height: 100%;
    }
    .carousel .carousel-img-list li{
        position: absolute;
        display: inline-block;
        top: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    .carousel .indicators-list{
        text-align: center;
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: 3;
        width: 100%;
        font-size: 0;
        -webkit-text-size-adjust:none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
    }
    .carousel .indicators-list span{
        display: inline-block;
        width: 15px;
        height: 2px;
        background: #eee;
        margin: 0 3px;
    }
    .carousel .indicators-list span.active{
        background: #2fb6ff;
    }
</style>
