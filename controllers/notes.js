const Notes = require('../models/notes')

exports.addNote = async (req, res) => {
    await Notes.create(req.body)

    res.status(201).json({
        message: 'Data berhasil ditambah'
    })
}

exports.getAllNotes = async (req, res) => {
    const notes = await Notes.find({})

    res.status(200).json({
        data: {
            notes
        }
    })
}

exports.getNoteById = async (req, res) => {
    const {id} = req.params

    const note = await Notes.find({_id: id})

    res.status(200).json({
        data : {
            note
        }
    })
}

exports.updateNote = async (req, res) => {
    const {id} = req.params

    await Notes.updateOne({_id: id},req.body)

    res.status(200).json({
        message: 'Data berhasil diupdate'
    })
}

exports.delete = async (req, res) => {
    const {id} = req.params

    await Notes.deleteOne({_id:id})

    res.status(200).json({
        message: 'Data berhasil dihapus'
    })
}