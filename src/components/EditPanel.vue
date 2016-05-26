<template>
  <div class="edit-panel">
  	<h7>{{date}}</h7>
  	<input type="text" v-model="note.title" placeholder="Title is required" />
  	<textarea v-model="note.content" placeholder="Content is required">
  	</textarea>
  	<div class="btns">
  		<button v-on:click.stop.prevent="save">save</button>
  		<button v-on:click.stop.prevent="cancel">cancel</button>
  	</div>
  </div>
</template>

<style lang="sass">

$width: 80%;

.edit-panel {
	height: 100%;
	background: #CCF3E4;
	border-radius: .5rem;
	padding: 1rem;
	display: block;

	h7 {
		width: 100%;
		height:10%;
		display: block;
	}

	input {
		width: $width;
		margin: 0 auto;
		height: 5%;
		display: block;

		border-radius: .5rem;
		border-width: 0;
		font-size: 3.5rem;
		color: #000000;
		background: #ffffff;

		padding: .5rem;

		margin-bottom: 2rem;
	}

	textarea {
		width: $width;
		margin: 0 auto;
		height: 60%;
		display: block;

		border-radius: .5rem;
		border-width: 0;
		font-size: 3rem;
		color: #000000;
		background: #ffffff;

		padding: .5rem;

		margin-bottom: 2rem;
	}

	.btns {
		height: 10%;
		display: flex;
		justify-content: space-around;

		button {
			height: 3rem;
			padding: .5rem;

			border-radius: .5rem;
			font-size: 3rem;
			color: #CCF3E4;
			background: gray;
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
  	return {
  		note: this.state.onEditNote,
  		date: (date.getMonth() + 1) + '/' + date.getDate()
  	}
  },
  methods:{
  	save() {
  		this.actions.updateNote(this.note.id, {title:this.note.title, content: this.note.content})
  	},
  	cancel() {
  		this.actions.cancelEdit()
  	}
  }
}
</script>