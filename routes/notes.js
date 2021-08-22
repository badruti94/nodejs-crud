const express = require('express')

const notes = require('../controllers/notes')

const router = express.Router()

router.post('/', notes.addNote)
router.get('/', notes.getAllNotes)
router.get('/:id', notes.getNoteById)
router.put('/:id', notes.updateNote)
router.delete('/:id', notes.delete)



module.exports = router