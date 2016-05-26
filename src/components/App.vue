<template>
  <div class="moli">
    <notes v-if="!state.editing" :state="state" :actions="actions" transition="slide"></notes>
    <edit-panel v-else :state="state" :actions="actions" transition="slide"></edit-panel>
  </div>
</template>

<style lang="sass">
html {
	font-size: 6px;
	background-color:#f8f8f8;
}
html,body{
	width: 100%;
	height: 100%;
  min-height: 100%;
	margin: 0;
	padding: 0;
}

div.moli {
  height: 100%;
  min-height: 100%;
	font-size: 3rem;
	min-height: 100%;

  /* 必需 */
  .slide-transition {
    transition: all .3s ease;
    overflow: hidden;
  }

  /* .slide-enter 定义进入的开始状态 */
  /* .slide-leave 定义离开的结束状态 */
  .slide-enter, .slide-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
}

</style>

<script>
import { state, actions } from '../store'
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
    Notes,
    EditPanel
  }
}
</script>