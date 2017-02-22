<template>
  <div id="app">
    <div class="wrap">
      <transition name="next">
        <router-view></router-view>
      </transition>
    </div>
    <!-- 导航 -->
    <nav-bar></nav-bar>
    <!-- <loading :show="isShow"></loading> -->
  </div>
</template>

<script>
import navBar from './page/main/common/nav-bar'
// import loading from './components/loading'
export default {
  name: 'app',
  components: {
      navBar,
      // loading
  },
  data(){
    return {
      isShow:false,
    }
  },

  computed: {
    // ...mapGetters([
    //   'doneTodos'
    // ]),
  },
  methods: {
      // ...mapMutations([
      //   'increment'
      // ]),
      // ...mapActions([
      //   'increment'
      // ])
  },
  mounted(){

  },
  created(){

  },
}
</script>

<style lang="scss">

</style>
