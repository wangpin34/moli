<template>
  <div class="notes">
   	<ul>
   		<li v-for="note in notes">
   			<note :data="note" v-on:click.stop.prevent="onEditNote(note.id)"></note>
   		</li>
   	</ul>
    <div class="btns">
      <span class="addNote" v-on:click.stop.prevent="onAddNote">+</span>
    </div>
  </div>
</template>

<style lang="sass">

$moli-green:#CCF3E4;
$moli-white:#f8f8f8;

div.notes {
	min-height: 100%;

  ul {
    padding : 1rem 1rem 8rem 1rem;
    li {
        background: $moli-green;
        list-style-type: none;
        margin-bottom: 2rem;
        padding: 1rem;
        border-bottom: 1px dotted yellow;
        border-radius: .5rem;
    }
  }

  .btns {
    z-index: 10;
    width: 100%;
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
import Note from './Note.vue'

//Mock up notes
const notes = {
	'a1': {
		id: 'a1',
		title: 'About Moli',
		content: 'This is the sample note content here. You can edit it, drop it, or save it.',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	'a2': {
		id: 'a2',
		title: 'Get start with Moli',
		content: 'Moli is very simple to use, and support person usage.',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}


export default {
  name: 'notes',
  props:['state', 'actions'],
  data() {
  	this.actions.fetchNotes(notes)
  	return {
  		content: 'Edit text',
  		notes: this.state.notes,
  	}
  },
  methods: {
  	onEditNote(id) {
  		this.actions.goEdit(id)
  	},
    onAddNote() {
      this.actions.addNote()
    }
  },
  components: {
  	Note
  }
}
</script>