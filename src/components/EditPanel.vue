<template>
  <div class="edit-panel">
  	<input type="text" v-model="note.title" v-on:keydown.self="handleTitle"/>
  	<textarea v-model="note.content" v-on:keydown.self="handleContent">
  	</textarea>
  	<div class="btns-editing">
  		<span v-on:click.stop.prevent="save">save</span>
  		<span v-on:click.stop.prevent="cancel">cancel</span>
  	</div>
  </div>
</template>

<style lang="sass">

$width: 80%;

.edit-panel {
	width: 100%;
	height: 100%;
	min-height: 100%;
	padding-top: 20%;
	background: #f8f8f8;;
	border-radius: .5rem;
	display: block;

	input {
		background: #CCF3E4;
		width: $width;
		margin: 0 auto;
		height: 5%;
		display: block;

		border-radius: .5rem;
		border-width: 0;
		font-size: 3.5rem;
		color: #000000;

		padding: .5rem;

		margin-bottom: 2rem;
	}

	textarea {
		background: #CCF3E4;
		width: $width;
		margin: 0 auto;
		height: 60%;
		display: block;

		border-radius: .5rem;
		border-width: 0;
		font-size: 3rem;
		color: #000000;

		padding: .5rem;

		margin-bottom: 2rem;
	}

	.btns-editing {
		width: $width;
		margin: 0 auto;
		height: 10%;
		display: flex;
		justify-content: space-between;

		span {
			background: #CCF3E4;
			height: 3rem;
			padding: .5rem 3rem;
			line-height: 3rem;
			border: 1px solid #ffffff;
			border-radius: .5rem;
			font-size: 3rem;
			color: #000000;
			cursor: pointer;
			vertical-align: middle;
			text-align: center;
		}
	}


}

</style>

<script>

export default {
  name: 'edit-panel',
  props:['state','actions'],
  data() {
  	let date = new Date()
  	let note = this.state.onEditNote
  	return {
  		note: note,
  		userTitle: !!note.title,
  		date: (date.getMonth() + 1) + '/' + date.getDate()
  	}
  },
  methods:{
  	save() {
  		this.actions.updateNote(this.note)
  	},
  	cancel() {
  		this.actions.cancelEdit()
  	},
  	handleTitle() {
  		this.userTitle = true
  	},
  	handleContent() {
  		//Use first 10 chars of content as title if user has not privide title
  		if(!this.userTitle){
  			this.note.title = this.note.content.substring(0, 10)
  		}
  	}
  }
}
</script>