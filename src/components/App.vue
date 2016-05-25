<template>
  <div class="moli">
    <notes v-if="!state.editing" :state="state" :actions="actions"></notes>
    <edit-panel v-else :state="state" :actions="actions"></edit-panel>
  </div>
</template>

<style>
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