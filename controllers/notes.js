const Notes = require('../models/notes')

exports.addNote = async (req, res) => {
    await Notes.create(req.body)

    res.status(201).json({
        status : 'success',
        message: 'Data berhasil ditambah'
    })
}

exports.getAllNotes = async (req, res) => {
    const notes = await Notes.find({})

    res.status(200).json({
        status: 'success',
        data: {
            notes
        }
    })
}

exports.getNoteById = async (req, res) => {
    const {id} = req.params

    const note = await Notes.findById(id)

    res.status(200).json({
        status: 'success',
        data : {
            note
        }
    })
}

exports.updateNote = async (req, res) => {
    const {id} = req.params

    await Notes.updateOne({_id: id},req.body)

    res.status(200).json({
        status: 'success',
        message: 'Data berhasil diupdate'
    })
}

exports.delete = async (req, res) => {
    const {id} = req.params

    await Notes.deleteOne({_id:id})

    res.status(200).json({
        status: 'success',
        message: 'Data berhasil dihapus'
    })
}