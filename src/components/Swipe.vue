<template>
    <div class="mint-swipe" :id="id"
         v-on:touchstart="doOnTouchStart"
         v-on:touchmove="doOnTouchMove"
         v-on:touchend="doOnTouchEnd">
        <slot name="main" :currentIndex="currentIndex" :transformStyle="transformStyle"></slot>
        <slot name="indicators" :currentIndex="currentIndex"></slot>
    </div>
</template>

<script>
export default {
  name: 'Swipe',
  props: {
    id: {
      type: String,
      default: null
    },
    speed: {
      type: Number,
      default: 300
    },
    noDrag: {
      type: Boolean,
      default: false
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
    this.dragState = {}
    this.currentIndex++
    this.transformStyle = 'transform: translateX(-100%);'
    console.log('created执行了')
  },
  mounted: function () {
    console.log('mounted执行了')
  },
  activated: function () {
    let _that = this
    console.log('activated执行了')
    _that.itemArray = this.$el.children[0].children
    function g () {
      if (_that.currentIndex === 0) {
        _that.currentIndex = _that.itemArray.length - 2
        _that.transformStyle = 'transform: translateX(' + (-100 * _that.currentIndex) + '%);'
      } else if (_that.currentIndex === _that.itemArray.length - 1) {
        _that.currentIndex = 1
        _that.transformStyle = 'transform: translateX(-100%);'
      }
      _that.animating = 0
    }
    this.$el.children[0].removeEventListener('webkitTransitionEnd', g, false)
    this.$el.children[0].addEventListener('webkitTransitionEnd', g, false)
  },
  methods: {
    doAnimate: function (t, o) {
      o = 'transform: translateX(' + o + 'px);'
      if (t) {
        this.animating = 1
        let n = 'transition: all ' + this.speed + 'ms ease-in-out'
        o = o + n
      }
      this.translate(o)
    },
    translate: function (t) {
      this.transformStyle = t
    },
    doOnTouchStart: function (e) {
      console.log('手势确认')
      console.log(e)
      if (this.animating === 1) {
        return false
      }
      this.slideing = 0
      this.userScrolling = 0
      let el = this.$el
      let n = this.dragState
      let w = e.touches[0]
      n.startTime = new Date()
      n.startLeft = w.pageX
      n.startTop = w.pageY
      n.startTopAbsolute = w.clientY
      n.pageWidth = el.offsetWidth
      n.pageHeight = el.offsetHeight
    },
    doOnTouchMove: function (e) {
      if (this.animating === 1 || this.userScrolling === 1) {
        console.log('不滑动')
        return void 0
      }
      let n = this.dragState
      let w = e.touches[0]
      n.currentLeft = w.pageX
      n.currentTop = w.pageY
      n.currentTopAbsolute = w.clientY
      let i = n.currentLeft - n.startLeft
      let s = n.currentTopAbsolute - n.startTopAbsolute
      let a = Math.abs(i)
      let b = Math.abs(s)
      let offset = this.currentIndex * -n.pageWidth
      if (a < 5 && (b > 15)) {
        console.log('禁止滑动了', a, b, 1.73 * a)
        this.userScrolling = 1
        this.doAnimate(false, offset)
        return void 0
      }
      console.log('正在滑动')
      this.slideing = 1
      e.preventDefault()
      console.log('阻止冒泡')
      i = Math.min(Math.max(-n.pageWidth + 1, i), n.pageWidth - 1)
      let o = i > 0 ? 'prev' : 'next'
      offset = offset + i
      if (o === 'prev') {
        this.doAnimate(false, offset)
      } else if (o === 'next') {
        this.doAnimate(false, offset)
      }
      console.log(o)
    },
    doOnTouchEnd: function (e) {
      if (this.animating === 1 || this.userScrolling === 1) {
        return false
      }
      console.log('移动结束')
      let _that = this
      let n = _that.dragState
      let i = n.currentLeft - n.startLeft
      let timeStamp = new Date() - n.startTime
      if (isNaN(i)) {
        return void 0
      }
      // let t = i > 0 ? 'next' : 'prev'
      let o = i > 0 ? 'prev' : 'next'
      if (timeStamp < 300 || Math.abs(i) > n.pageWidth / 2) {
        console.log('快速滑动')
        if (o === 'prev') {
          //
          _that.currentIndex--
        } else if (o === 'next') {
          //
          _that.currentIndex++
        }
      }
      i = _that.currentIndex * -n.pageWidth
      _that.doAnimate(true, i)
      this.dragState = {}
    }
  }
}
</script>
<style scoped>
    .mint-swipe{
        position: relative;
        padding-bottom:25px;
    }
    .mint-swipe ul{
        list-style: none;
    }
    .mint-swipe-items-wrap{
        position: relative;
        display: block;
        width: 100%;
        height: 152px;
    }
    .mint-swipe-items-wrap li{
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        white-space: nowrap;
    }
    .mint-swipe-items-wrap li.active{
    }
    .mint-swipe-indicators{
        position: absolute;
        bottom: 10px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: 0;
        -webkit-text-size-adjust:none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
    }
    .mint-swipe-indicators li{
        display: inline-block;
        width:10px;
        height: 2px;
        background-color: #cccccc;
        margin: 0 2px;
        white-space: nowrap;
    }
    .mint-swipe-indicators li.active{
        background-color: #00a6ff;
    }
</style>
