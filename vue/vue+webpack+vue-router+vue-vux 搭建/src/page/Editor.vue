<template>
  <div class="note-editor">
    <div style="height:70%;">
      <textarea
        v-model="activeNoteText">
      </textarea>
    </div>
    <el-button type="primary" size="mini" @click="updateActiveNote(activeNoteText)">保存</el-button>
  </div>
</template>
<script>
import { mapGetters , mapActions } from 'vuex'
export default {

  computed: {
  // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'activeNoteText'
    ])
  },
  methods: {
    ...mapActions([
      'updateActiveNote'
    ]),
  }
}
</script>
<style media="screen">
  .note-editor {
    height: 70%;
  }
  .note-editor textarea {
    height: 100%;
    width: 60%;
  }
</style>
