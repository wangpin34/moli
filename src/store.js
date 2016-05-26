export const state = {
	notes: {},
	onEditNote: null,
	editing: false
}

export const actions = {

	goEdit(id) {
		state.editing = true
		state.onEditNote = Object.assign({}, state.notes[id])
	},

	addNote(note = {}) {
		let id = Math.random() + ''
		note.id = id
		note.title = ''
		note.content = ''
		note.createdAt = new Date()
		note.updateAt = new Date()

		state.notes[id] = note
		state.onEditNote = Object.assign({}, note)

		state.editing = true		
	},

	updateNote(id, {title, content}) {
		state.notes[id].title = title;
		state.notes[id].content = content;
		state.notes[id].updatedAt = new Date()

		state.editing = false
	},

	cancelEdit() {
		state.editing = false
		state.onEditNote = null
	},

	fetchNotes(notes) {
		state.notes = Object.assign(state.notes, notes)
	},

	getNotes() {
		return state.notes
	}
}

const addNote = (title, content) => {
	return {
		id: Math.random() + '',
		title,
		content,
		createdAt: new Date(),
		updatedAt: new Date()
	}
}