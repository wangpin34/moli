<template>
  <div class="notes">
   	<ul>
   		<li v-for="note in notes">
   			<note :data="note" v-touch:tap.stop.prevent="onEditNote(note.id)"></note>
   		</li>
   	</ul>
  </div>
</template>

<style lang="sass">

$moli-green:#CCF3E4;
$moli-white:#f8f8f8;

div.notes {
	height: 80%;
  overflow: auto;
  margin: 10% 0;

  ul {
    padding : 1rem 1rem 0 1rem;
    li {
        background: $moli-green;
        list-style-type: none;
        margin-bottom: 2rem;
        padding: 1rem;
        border-bottom: 1px dotted yellow;
        border-radius: .5rem;
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
  props:['notes', 'actions'],
  ready() {
    this.actions.fetchNotes()
  },
  beforeDestory() {
    this.actions.syncSnapshot()
  },
  methods: {
  	onEditNote(id) {
  		this.actions.goEdit(id)
  	}
  },
  components: {
  	Note
  }
}
</script>