export default {

	state: {
		notes: {},
		onEditNote: null,
		editing: false
	},

	//Go to edit the select note
	goEdit(id) {
		this.state.editing = true
		this.state.onEditNote = Object.assign({}, this.state.notes[id])
	},

	//Go to add a new note
	addNote() {
		let note = addNote()
		this.state.onEditNote = Object.assign({}, note)
		this.state.editing = true		
	},

	//Update the specify note
	updateNote(note) {
		note = Object.assign({}, note)
		note.updatedAt = new Date()
		this.state.notes[note.id] = note
		this.state.editing = false
	},

	//Cancel current edit, it shall be add note or update note
	cancelEdit() {
		this.state.editing = false
		this.state.onEditNote = null
	},

	//Fetch notes from local file system
	fetchNotes(notes) {
		//let notes = []
		this.state.notes = Object.assign(this.state.notes, notes)
	}

}

const addNote = (title = '', content = '') => {
	return {
		id: Math.random() + '',
		title,
		content,
		createdAt: new Date(),
		updatedAt: new Date()
	}
}