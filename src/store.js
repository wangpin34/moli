export const state = {
	notes: {},
	onEditNote: null,
	editing: false
}

export const actions = {

	//Go to edit the select note
	goEdit(id) {
		state.editing = true
		state.onEditNote = Object.assign({}, state.notes[id])
	},

	//Go to add a new note
	addNote() {
		let note = addNote()
		state.onEditNote = Object.assign({}, note)
		state.editing = true		
	},

	//Update the specify note
	updateNote(note) {
		note = Object.assign({}, note)
		state.notes[note.id] = note
		note.updatedAt = new Date()
		state.editing = false
	},

	//Cancel current edit, it shall be add note or update note
	cancelEdit() {
		state.editing = false
		state.onEditNote = null
	},

	//Fetch notes from local file system
	fetchNotes(notes) {
		//let notes = []
		state.notes = Object.assign(state.notes, notes)
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