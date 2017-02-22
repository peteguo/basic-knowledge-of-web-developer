<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="val in listBanner">
          <a :href="val.url">
            <img :src="val.img" alt="">
          </a>
        </div>
        <!-- <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<style lang="scss">
.swiper-container {
  height: 300px;
  a,img {
    height:300px;display:block;width: 100%;
  }
}
</style>
<script>

export default {
  name: 'app',
  components: {

  },
  props: {
    listBanner: {
      type: Array,
      default: []
    },
    loop: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 1000
    },
    autoplay: {
      type: Number,
      default: 500
    },
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
    swiper(){
      let mySwiper = new Swiper ('.swiper-container', {
          loop: this.loop,
          autoplay: this.autoplay,
          speed: this.speed,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          paginationType: 'bullets',
      });
    }
  },
  mounted(){
    if(this.listBanner && this.listBanner.length > 0)
      {
        this.swiper();
      }
  },
  created(){
    //console.log(JSON.stringify(this.listBanner))
  },
}
</script>
