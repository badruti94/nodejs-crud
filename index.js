const express = require('express')
const bodyParser = require('body-parser')
const {v4 : uuidv4} = require('uuid')

const app = express();


app.use(bodyParser.json())

let data = [];

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/', (req, res) => {
    data.push({
        id: uuidv4(),
        ...req.body
    })
    res.json({
        msg: 'success'
    })
})

app.get('/:id', (req, res) => {
    const {id} = req.params;
    const dataById = data.filter(dt => dt.id === id)[0]
    res.json({
        data: dataById
    })
})

app.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, note} = req.body

    data = data.map( dt => {
        if(dt.id == id){
            return {
                ...dt,
                title,
                note,
            }
        }
        return dt
    })

    res.json({
        msg: 'success'
    })
})

app.delete('/:id', (req, res) => {
    const {id} = req.params;

    data = data.filter( dt => dt.id !== id)
    res.json({
        msg: 'success'
    })
})

app.listen(3001,()=>{
    console.log('Listening on http://localhost:3001');
})