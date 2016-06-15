<template>
  <div class="moli">
    <div class="main-pad" v-show="!state.editing">
        <app-head :total="state.total"></app-head>
        <notes :notes="state.notes" :actions="actions"></notes>
        <div class="btns">
            <span class="addNote" v-touch:tap.stop.prevent="actions.addNote()">+</span>
        </div>
    </div>
    <edit-panel v-else :note="state.onEditNote" :actions="actions" transition="slide"></edit-panel>
  </div>
</template>

<style lang="sass">
$moli-green:#CCF3E4;
$moli-white:#f8f8f8;

html {
    font-size: 6px;
    background-color:#f8f8f8;
}
html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

div.moli {
    height: 100%;
    font-size: 3rem;
    min-height: 100%;
    overflow: hidden;

  /* 必需 */
  .slide-transition {
    transition: all 1s ease;
    overflow: hidden;
  }

  /* .slide-enter 定义进入的开始状态 */
  /* .slide-leave 定义离开的结束状态 */
  .slide-enter, .slide-leave {
    width: 0;
    display: none;
  }

  .main-pad {
    overflow: auto;
    height: 100%;
  }

  .btns {
    z-index: 10;
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid $moli-green;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    background: $moli-white;
    .addNote {
      display: block;
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      text-align: center;
      background: $moli-green;
      color: $moli-white;

      font-weight: bold;
      font-size: 50px;
      line-height: 4rem;

      border-radius: 100%;
    }

  }
}

</style>

<script>
import {state, actions} from '../store'
import AppHead from './AppHead.vue'
import Notes from './Notes.vue'
import EditPanel from './EditPanel.vue'

export default {
  
  data() {
    return {
        state,
        actions    
      }
  },
  components: {
    AppHead,
    Notes,
    EditPanel
  }
}
</script>