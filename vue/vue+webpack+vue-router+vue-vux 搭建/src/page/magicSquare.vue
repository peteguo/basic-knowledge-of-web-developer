<template>
  <div id="app">
    <div class="app-sidebar" style="margin-top: 116px;">
    <div class="arrow"></div>
    <div class="app-sidebar-inner js-sidebar-region" style=""><div>
    <form class="form-horizontal custom-cube2-table cube2-edit" novalidate="">
    <div class="control-group layout-map">
        <label class="control-label">布局：</label>
        <div class="controls" name="layout_map">
            <table>
                <tbody>
                    <tr>
                      <!-- <td class="not-empty cols-2 rows-2" colspan="2" rowspan="2" data-index="0">
                          <img src="https://img.yzcdn.cn/upload_files/2016/12/12/Fvm_v_pknTlbM6OPGSnu6M99eyFp.png!730x0.jpg">
                      </td> -->
                      <td class="empty" data-x="0" data-y="0"></td>
                      <td class="empty" data-x="1" data-y="0"></td>
                      <td class="empty" data-x="2" data-y="0"></td>
                      <td class="empty" data-x="3" data-y="0"></td>
                      <td class="empty" data-x="4" data-y="0"></td>
                    </tr>
                    <tr>
                      <td class="empty" data-x="0" data-y="1"></td>
                      <td class="empty" data-x="1" data-y="1"></td>
                      <td class="empty" data-x="2" data-y="1"></td>
                      <td class="empty" data-x="3" data-y="1"></td>
                      <td class="empty" data-x="4" data-y="1"></td>
                    </tr>
                    <tr>
                      <td class="empty" data-x="0" data-y="2"></td>
                      <td class="empty" data-x="1" data-y="2"></td>
                      <td class="empty" data-x="2" data-y="2"></td>
                      <td class="empty" data-x="3" data-y="2"></td>
                      <td class="empty" data-x="4" data-y="2"></td>
                    </tr>
                    <tr>
                      <td class="empty" data-x="0" data-y="3"></td>
                      <td class="empty" data-x="1" data-y="3"></td>
                      <td class="empty" data-x="2" data-y="3"></td>
                      <td class="empty" data-x="3" data-y="3"></td>
                      <td class="empty" data-x="4" data-y="3"></td>
                    </tr>
                    <tr>
                      <td class="empty" data-x="0" data-y="4"></td>
                      <td class="empty" data-x="1" data-y="4"></td>
                      <td class="empty" data-x="2" data-y="4"></td>
                      <td class="empty" data-x="3" data-y="4"></td>
                      <td class="empty" data-x="4" data-y="4"></td>
                    </tr>
                </tbody>
            </table>
            <p @click="dialogVisible = true" class="help-desc">点击 + 号添加内容</p>
        </div>
    </div>
    <div class="control-group js-item-region">
        <ul class="choices"></ul>
    </div>
</form>
</div></div>
</div>
    <div class="">
      <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <div class="modal-body clearfix layout-table">
          <ul class="layout-cols layout-cols-1">
                  <li data-cols="1" data-rows="1" class="selected"></li>
                  <li data-cols="1" data-rows="2" class="selected"></li>
                  <li data-cols="1" data-rows="3" class="selected"></li>
                  <li data-cols="1" data-rows="4" class="selected"></li>
                  <li data-cols="1" data-rows="5" class="selected"></li>
            </ul>
          <ul class="layout-cols layout-cols-2">


                  <li data-cols="2" data-rows="1" class="selected"></li>


                  <li data-cols="2" data-rows="2" class="selected"></li>


                  <li data-cols="2" data-rows="3" class="selected"></li>


                  <li data-cols="2" data-rows="4" class="selected"></li>
                  <li data-cols="2" data-rows="5" class="selected"></li>
              </ul>
          <ul class="layout-cols layout-cols-3">


                  <li data-cols="3" data-rows="1" class="selected"></li>


                  <li data-cols="3" data-rows="2" class="selected"></li>


                  <li data-cols="3" data-rows="3" class="selected"></li>

                  <li data-cols="3" data-rows="4" class="selected"></li>
                  <li data-cols="3" data-rows="5" class="selected"></li>
              </ul>
          <ul class="layout-cols layout-cols-4">


                  <li data-cols="4" data-rows="1" class="selected"></li>


                  <li data-cols="4" data-rows="2" class="selected"></li>


                  <li data-cols="4" data-rows="3" class="selected"></li>


                  <li data-cols="4" data-rows="4" class="selected"></li>
                  <li data-cols="4" data-rows="5" class="selected"></li>
            </ul>
            <ul class="layout-cols layout-cols-4">


                    <li data-cols="5" data-rows="1" class="selected"></li>


                    <li data-cols="5" data-rows="2" class="selected"></li>


                    <li data-cols="5" data-rows="3" class="selected"></li>


                    <li data-cols="5" data-rows="4" class="selected"></li>
                    <li data-cols="5" data-rows="5" class="selected"></li>
              </ul>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import { modal } from 'vue-strap'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    modal
  },
  data(){
    return {
      showCustomModal:true,
      dialogVisible: false
    }
  },
  mounted(){
    //this.$store.commit('increment',1)
    $('.controls tr td').click(function() {
      let trSum = $('.controls tr');
      let tdSum = $('.controls tr td')
      //console.log(tdSum)
      let x = $(this).attr('data-x')
      let y = $(this).attr('data-y')
      let thisTr = $(this).parent('tr');
      let arrDeleteTd = []
      tdSum.each(function(index) {

        if($(this).attr('data-x') <= x && $(this).attr('data-y') <= y){
          //arrDeleteTd.splice(1,1,tdAdd)
          let thisTr = $(this).parent('tr')
          arrDeleteTd.push(thisTr)
          //console.log(arrDeleteTd[0])
          $(this).hide();
        }
      })
      let tdAdd ='<td class="not-empty cols-2 rows-2" colspan="" rowspan="" data-index=""><img src="https://img.yzcdn.cn/upload_files/2016/12/12/Fvm_v_pknTlbM6OPGSnu6M99eyFp.png!730x0.jpg"></td>'
      arrDeleteTd[0].prepend(tdAdd)
      let addLength = $('.not-empty').length;
      let thisClass = $('.not-empty')[addLength-1]
      console.log(thisClass);
      let i = 0;
      $('.not-empty').eq(addLength-1).attr({
        'colspan':Number(x)+1,
        'rowspan':Number(y)+1,
        'data-index': i++
      })
        // $('.not-empty').each(function(index) {
        //   $(this).attr({
        //     'colspan':Number(x)+1,
        //     'rowspan':Number(y)+1
        //   })
        // });

      //console.log(arrDeleteTd[0])
      // for (let i in trSum) {
      //   let tdSum = trSum[i];
      //   //console.log(JSON.stringify(tdSum))

      // }
    });
  },
  created(){

  },


}
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .cube2-edit table td.cols-2 {
      width: 60px;
  }

  .cube2-edit table td.rows-2 {
      height: 120px;
  }
  .cube2-edit table td {
      width: 60px;
      height: 60px;
      cursor: pointer;
      text-align: center;
      color: #ccc;
      background-color: rgba(0,0,0,0.1);
      padding: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  caption, th, td {
      font-weight: normal;
      vertical-align: middle;
  }
  .app-design .app-sidebar .app-sidebar-inner .form-horizontal img {
      vertical-align: bottom;
  }
  .cube2-edit table img {
      max-height: 1000%;
  }
  img {
      width: auto\9;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
      border: 0;
      -ms-interpolation-mode: bicubic;
      position: relative;
  }
  .cube2-edit table td.index-2 {
      background-color: #DB9E36;
  }

  .cube2-edit table td.current {
      -webkit-box-shadow: 0 0 0 2px #858585 inset;
      box-shadow: 0 0 0 2px #858585 inset;
      padding: 2px;
  }
  .cube2-edit table td {
      width: 60px;
      height: 60px;
      cursor: pointer;
      text-align: center;
      color: #ccc;
      background-color: rgba(0,0,0,0.1);
      padding: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  caption, th, td {
      font-weight: normal;
      vertical-align: middle;
  }
  .app-design .app-sidebar {
      position: relative;
      float: left;
      width: 420px;
      margin-left: 10px;
      padding-bottom: 50px;
      font-size: 14px;
  }
  .app-design .app-sidebar .arrow, .app-design .app-sidebar .arrow:after {
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 6px 7px 6px 0;
      border-color: transparent #d1d1d1 transparent transparent;
      position: absolute;
      left: -6px;
      top: 19px;
  }
  .app-design .app-sidebar .arrow:after {
      content: "";
      border-right-color: #f8f8f8;
      left: 2px;
      top: -6px;
  }
  .app-design .app-sidebar .app-sidebar-inner {
      padding: 12px 10px;
      min-height: 28px;
      background: #f8f8f8;
      border-radius: 5px;
      border: 1px solid #d1d1d1;
  }
  .app-design .app-sidebar .app-sidebar-inner .form-horizontal {
      margin-bottom: 0;
  }

  .form-horizontal {
      margin-bottom: 30px;
      width: auto;
  }
  .form-horizontal .control-group:after, .form-horizontal .control-group:before {
      display: table;
      line-height: 0;
      content: "";
  }
  .cube2-edit .control-group .choices {
      margin: 0;
  }

  ol, ul {
      list-style: none;
  }
  .controls-row:after, .dropdown-menu>li>a, .form-actions:after, .form-horizontal .control-group:after, .modal-footer:after, .nav-pills:after, .nav-tabs:after, .navbar-form:after, .navbar-inner:after, .pager:after, .thumbnails:after {
      clear: both;
  }

  .form-horizontal .control-group {
      margin-bottom: 10px;
  }

  .form-horizontal .control-group {
      margin-bottom: 20px;
  }
  .control-group {
      margin-bottom: 10px;
  }
  .app-design .app-sidebar .control-label {
      width: 87px;
      cursor: default;
  }
  .form-horizontal .control-label {
      width: 120px;
      font-size: 14px;
      line-height: 18px;
  }

  .form-horizontal .control-label {
      float: left;
      width: 160px;
      padding-top: 5px;
      text-align: right;
  }
  .cube2-edit table {
      width: 240px;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  .app-design .app-sidebar .controls {
      margin-left: 93px;
  }
  .form-horizontal .controls {
      margin-left: 130px;
      word-break: break-all;
  }
  .form-horizontal .controls {
      margin-left: 180px;
  }
  .form-horizontal .help-block, .form-horizontal .help-desc {
      opacity: 0.6;
      line-height: 14px;
      font-size: 12px;
      margin-top: 6px;
      margin-bottom: 0;
  }
  tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
  }
  tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
  }
  .cube2-edit table td.empty {
      background-color: transparent;
  }
  .cube2-edit table td {
      width: 60px;
      height: 60px;
      cursor: pointer;
      text-align: center;
      color: #ccc;
      background-color: rgba(0,0,0,0.1);
      padding: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  caption, th, td {
      font-weight: normal;
      vertical-align: middle;
  }
  td, th {
      display: table-cell;
      vertical-align: inherit;
  }
  .cube2-edit table td.empty:after {
      content: '+';
  }
  .layout-table {
      padding: 40px 195px;
  }
  .modal-body {
      max-height: none;
  }
  .modal-body {
      position: relative;
      max-height: 400px;
      padding: 15px;
      overflow-y: auto;
    }
  .clearfix:after, .clearfix:before {
      display: table;
      line-height: 0;
      content: "";
    }
    .layout-cols {
        float: left;
  }

  ol, ul {
      list-style: none;
      padding: 0;
  }
  /*.layout-cols li.selected {
      background: #ddeafb;
      border-color: #c3d9ff;
  }*/
  .layout-cols li:hover {
      background: #ddeafb;
      border-color: #c3d9ff;
  }
  .layout-cols li {
      margin: 1px;
      background: #f8f8f8;
      width: 60px;
      height: 60px;
      border: 1px solid #e9e9e9;
      border-right-width: 2px;
      border-bottom-width: 2px;
  }
  .clearfix:after, .clearfix:before {
      display: table;
      line-height: 0;
      content: "";
  }
  .clearfix:after, .container-fluid:after, .container:after, .dl-horizontal:after, .row-fluid:after, .row:after {
      clear: both;
  }
</style>
