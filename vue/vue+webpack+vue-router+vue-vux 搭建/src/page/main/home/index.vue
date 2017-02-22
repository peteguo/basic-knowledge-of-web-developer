<template>
  <div class="homepage">
    <!-- 头部标题 -->
    <header-title>
      <span slot="title">首页</span>
    </header-title>

      <!-- 轮播图 -->
    <banner :list-banner="list"></banner>

    <!-- tab切换 -->
    <ul class="tab-menu v-flexbox">
      <li class="v-flexbox-item tab-item" v-for="(val,index) in dataTab" :class="{active:index==isActive}" @click.prevent="changeTab(val.keys)">
        <a href="#">{{val.title}}</a>
      </li>
    </ul>
    <!-- 商品区 -->
    <section class="main-contianer">
      <ul class="itemBox">
        <li class="item" v-for="val in shopList">
          <a href="#">
              <img :src="val.cover" alt="" :style="{width:val.imgwh + 'px',height:val.imgwh + 'px'}">
              <div class="info">
                <p class="title nowrap-multi">{{val.title}}</p>
              </div>
          </a>
        </li>
      </ul>
    </section>
    <!-- 加载数据 -->
    <!-- <loading :show="isShow"></loading> -->
  </div>
</template>
<style lang="scss">
.tab-menu{
        position: relative;
        padding:10px 0;
        background: #fff;
        .active a{color:#ff6666;}
        &:before {
              position: absolute;
              top: 0;
              left: 0;
              left: 0;
              width: 100%;
              height: 1px;
              border-top: 1px solid #d9d9d9;
              color: #d9d9d9;
              content: " ";
              -webkit-transform: scaleY(.5);
              transform: scaleY(.5);
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
        }

        .tab-item:last-child a{
            position: relative;
            display: block;

            &:before {
                content:"";
                display: block;
                position: absolute;
                top:0;
                right:20%;
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 7px solid #555;
            }

            &:after{
                content:"";
                display: block;
                position: absolute;
                bottom:0;
                right:20%;
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 7px solid #555;
            }
        }

        .markUp{
            &:before {border-bottom: 7px solid #ff6666 !important;}
        }
         .markDown{
            &:after {border-top: 7px solid #ff6666 !important;}
        }

    }
.main-container{
    position: relative;
    width: 100%;
    margin-bottom: 55px;
    overflow: hidden;
    .itemBox {
      overflow: hidden;
      min-height: 450px;
      .item:nth-child(even){
            &:after {
                position: absolute;
                top: 0;
                left: 0;
                width: 1px;
                height: 100%;
                border-right: 1px solid #d9d9d9;
                color: #d9d9d9;
                content: " ";
                -webkit-transform: scaleX(.5);
                transform: scaleX(.5);
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
            }
         }

    }

}
.item {
    position: relative;
    width: 50%;
    float: left;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    padding: 10px;
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        content: " ";
        -webkit-transform: scaleY(0.5);
        -ms-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
}
.title {
  line-height: 1.4;
  font-size: 14px;
}
.info {
  background: #fff;
  height: 40px;
}
</style>
<script>
import headerTitle from '../common/header-title'
import banner from 'src/components/banner'
// import loading from 'src/components/loading'
import Mock from 'mockjs'
import Http from 'src/page/lib/https'
import { _shopJson} from 'src/vuex/api/mainAPI'
export default {
  name: 'app',
  components: {
      headerTitle,
      banner,

  },
  data(){
    return {
      listB: [],
      dataTab:[{title:'综合',keys:0},{title:'数量',keys:1},{title:'价格',keys:2},{title:'筛选',keys:3}],
      isActive:0,
      shopList:[],
    }
  },
  computed: {

  },
  methods: {
    changeTab(key){
      console.log(key);
      this.isActive = key
      this.getData()
    },
    // 获取数据
    getData(){
      Mock.mock('shoplist.json', {
        retcode: 1,
        retmsg: '查询成功',
        data: {
          'total': 1,
          'records': 10,
          'page': 1,
          'rows|10': [{
              'id|+1': 1,
              'sid|+1': 1,
              'remainmember':'@natural(100, 1000)',
              'joinedmember':'@natural(100, 1000)',
              'totalmember':'@natural(100, 1000)',
              'title': '@title(6, 50)',
              'cover': '@image(200x200, green, good)'
          }]
        }
      })
      let _this = this;
      $.ajax({
          url: 'shoplist.json',
          dataType: 'json'
      }).done(function(data, status, jqXHR){

          _this.$nextTick(function () {
            _this.shopList = data.data.rows
          })

      })
      // _shopJson().then(({success, result, msg}) => {
      //   this.shopList = result
      //   console.log(result);
      // })
    }
  },
  mounted(){


  },
  created(){

    let dataB = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'listBanner|4': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'url':'@url',
            'img': '@image(640x400,#ccc,#333,Banner)'
        }]
    })
    this.list = dataB.listBanner
    //console.log(JSON.stringify(this.list))
    this.getData()

    //console.log(JSON.stringify(shoplist.json))
  },
}
</script>
