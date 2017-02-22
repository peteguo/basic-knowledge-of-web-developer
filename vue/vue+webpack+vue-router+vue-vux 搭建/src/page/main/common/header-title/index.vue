<template>
  <header class="app-header">
    <p class="h-left">
      <slot name="left"></slot>
    </p>
    <h1 class="app-title"><slot name="title"></slot></h1>
    <p class="h-right">
      <slot name="right"></slot>
    </p>
  </header>
</template>
<style lang="scss">
  .app-header{
      position: relative;
      padding: 0 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      background:#ff6666;
      color:#fff;
      .h-left,.h-right{
        position: absolute;
        top:0;
        z-index: 100;
        width: 60px;
        text-align: center;
      }
      .h-left{
        left: 0;
      }

      .h-right{
        right: 0;
      }
      .app-title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding:0 60px;
        text-align: center;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

      }
      h1 {
        margin-top: 12.5px;
      }
    }
</style>
<script>
export default {
  name: 'app',
  components: {

  },
  data(){
    return {

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
