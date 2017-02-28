<template>
  <div class="login">
    <header-title>
      <span slot="title">登录</span>
    </header-title>
    <div class="weui_cells">
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">账号：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入账号\手机号" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">密码：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入密码" type="text">
          </p>
          <p class="weui_cell_ft">忘记密码</p>
        </div>
    </div>

    <div class="ubtn-group">
        <p class="weui_btn weui_btn_warn" id="logBtn">登陆</p>
        <p class="weui_btn" id="regBtn">注册</p>
    </div>



  </div>
</template>

<script>

import headerTitle from '../../common/header-title'

export default {
    data() {
     return{
       title:'登陆',
       titleColor:'red'
     }
    },
    components:{
       headerTitle
    },

}
</script>

<style lang="scss">
.ubtn-group{
    margin-top: 45px;
    padding: 0 15px;
}

#regBtn{
    color:#ff6666;
    &:after{ border:1px solid #ff6666; }
}
// .app-nav {
//   display: none;
// }
</style>
