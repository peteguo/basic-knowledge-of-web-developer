<template>
  <nav class="app-nav">
    <div class="tab-bar">
      <router-link :to="{path:'home'}">
        <a class="bar-item">
          <i class="icon">&#xe600;</i>
          <p>首页</p>
        </a>
      </router-link>
      <router-link :to="{path:'classify'}">
        <a class="bar-item">
             <i class="icon">&#xe603;</i>
             <p>分类</p>
         </a>
       </router-link>
       <router-link :to="{path:'cart'}">
         <a class="bar-item">
             <i class="icon">&#xe602;</i>
             <p>购物车</p>
         </a>
       </router-link>
       <router-link :to="{path:'me'}">
         <a class="bar-item">
             <i class="icon">&#xe601;</i>
             <p>我的</p>
         </a>
       </router-link>
    </div>
  </nav>
</template>
<script>

// import navBar from '../page/main/common/nav-bar'

export default {
  name: 'app',
  components: {

      // navBar
  },
  data(){
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted(){

  },
  created(){

  },


}
</script>
<style lang="scss">
  .app-nav {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: translateZ(0);
    background: #fff;
    &:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      transform-origin: 0 0;
      transform: scale(.5);
    }
    .tab-bar {
      padding-top: 2px;
      width: 100%;
      height: 55px;
      text-align: center;
      display: flex;
      -webkit-box-align:center;
      -webkit-align-items:center;
      justify-content: space-between;

      a {
        color: #5D656B;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display:block;
        font-size: 14px;
        .icon {
          font-size: 18px;
          margin-bottom: 5px;
          display: block;
        }
      }
    }
  }
  .router-link-active a i, .router-link-active a p {
  color: rgb(247, 11, 18)
  }

</style>
