import fs from 'fs-h5'
import _ from 'underscore'

const addNote = (title = '', content = '') => {
	return {
		id: Math.random() + '',
		title: 'sample',
		content,
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

//Store notes list info at local storage

const storage = window.localStorage;
const KEY_NOTES = 'KEY_NOTES'
const BYTES = 10 * 1024 * 1024

let ROOT

export const state = {
	total: 0,
	notes: JSON.parse( storage.getItem(KEY_NOTES) || '{}' ),
	onEditNote: addNote(),
	editing: false
}

state.total = Object.keys(state.notes).length

export const init = {
	setRoot(root) {
		ROOT = cordova.file.applicationStorageDirectory || cordova.file.dataDirectory
	}
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
		note.shortCut = note.content ? note.content.substr(0, 10) : ''
		note.updatedAt = new Date()
		let obj = {}
		obj[note.id] = note
		state.notes = Object.assign({}, state.notes, obj)
		state.editing = false
		
		state.total = Object.keys(state.notes).length

		this.syncNote(note.id)
		this.syncSnapshot()
	},

	//Cancel current edit, it shall be add note or update note
	cancelEdit() {
		state.editing = false
	},

	//Fetch notes from local file system
	fetchNotes() {
		init.setRoot()
		
		return fs.requestQuota(BYTES).then( grantBytes => {
			return fs.init(grantBytes, window.PERSISTENT)
		}).then( () => {
			return fs.list(ROOT)
		}).then( entries => {
			return Promise.all( entries.map( entry => {
				let id = entry.name
				return fs.readFile(entry.fullPath).then( (content) => {
					return {
						content,
						id
					}
				})
				
			}) )
		}).then( list => {
			list.forEach( ({content, id}) => {
				let obj = JSON.parse(content || '{}')
				if(obj.id && obj.title){
					if(obj.content){
						obj.shortCut = obj.content.substr(0, 10)
					}
					let wrapper = {}
					wrapper[obj.id] = obj
					state.notes = Object.assign({}, state.notes, wrapper)
				}
			})

			state.total = Object.keys(state.notes).length
			return state.notes
		})
	},



	syncNote(id) {
		var note = state.notes[id]

		return fs.writeFile(ROOT + id, JSON.stringify(note))
	},

	syncSnapshot() {
		var shots = {}
		var notes = Object.assign({}, state.notes)
		for( var id in notes) {
			var note = notes[id]
			delete note.content
			shots[id] = note
		}

		storage.setItem(KEY_NOTES, JSON.stringify(shots))
	}

}
