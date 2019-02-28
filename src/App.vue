<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  @import './assets/icon/iconfont.css';
</style>

<style>
  .default-a{
    text-decoration: none;
  }
  *{
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-user-focus: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
  }
  html,body,h1, h2, h3, h4, h5, h6, p,ul,li,img,span,div{
    margin: 0;
    padding: 0;
    outline:0;
  }
  html {
    position: relative;
    height: 100%;
  }
  body {
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  .clearfix:after{
    display: block;
    width: 100%;
    height: 0;
    content: "";
    clear: both;
  }
  a{
    outline: none;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
  a:active{
    out-line: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .list-unstyled{
    list-style: none;
  }
  .row-ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
