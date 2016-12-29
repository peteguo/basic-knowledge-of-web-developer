<template>
  <div style="height:100%;">
      <!-- <router-link to="/toolBar">首页</router-link>
      <router-link to="/list">列表页</router-link> -->
      <toolbar></toolbar>
      <notes-list></notes-list>
      <editor></editor>
      <magicSquare></magicSquare>
      <!-- <router-view></router-view> -->
    </div>
</template>

<script>

import toolbar from 'src/page/ToolBar'
import notesList from 'src/page/notesList'
import editor from 'src/page/Editor'
import magicSquare from 'src/page/magicSquare'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    toolbar,
    notesList,
    editor,
    magicSquare
  },
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters([
      'doneTodos'
    ]),
  },
  methods: {
      ...mapMutations([
        'increment'
      ]),
      ...mapActions([
        'increment'
      ])
  },
  mounted(){

  },
  created(){

  },


}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);

html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}

#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #20A0FF;
  color: #fff;
  padding: 35px 25px 25px 25px;
}

#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 137px);
	max-height: calc(100% - 137px);
	overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}

.list-group-item-heading {
  font-weight: 300;
  font-size: 15px;
}

#note-editor {
  height: 100%;
  margin-left: 380px;
}

#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}

#toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}

.starred {
  color: #F7AE4F;
}

</style>
