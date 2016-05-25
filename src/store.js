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

	cancelEdit() {
		state.editing = false
		state.onEditNote = null
	},

	addNote() {
		Object.assign(state.notes, {})

		state.editing = false		
	},

	updateNote(id, {title, content}) {
		state.notes[id].title = title;
		state.notes[id].content = content;
		state.notes[id].updatedAt = new Date()

		state.editing = false
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