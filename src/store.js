const addNote = (title = '', content = '') => {
	return {
		id: Math.random() + '',
		title: 'sample',
		content,
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const state = {
	notes: {},
	onEditNote: addNote(),
	editing: false
}

export const actions =  {

	//Go to edit the select note
	goEdit(id) {
		state.onEditNote = Object.assign({}, state.notes[id])
		state.editing = true
	},

	//Go to add a new note
	addNote() {
		state.onEditNote = Object.assign({}, addNote())
		state.editing = true		
	},

	//Update the specify note
	updateNote(note) {
		note.updatedAt = new Date()
		let obj = {}
		obj[note.id] = note
		state.notes = Object.assign({}, state.notes, obj)
		state.editing = false
	},

	//Cancel current edit, it shall be add note or update note
	cancelEdit() {
		state.editing = false
	},

	//Fetch notes from local file system
	fetchNotes(notes) {
		//let notes = []
		state.notes = Object.assign(state.notes, notes)
	}

}
