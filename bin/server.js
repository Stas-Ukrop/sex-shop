import app from '../app.js'
import dotenv from 'dotenv/config'
import myDB from '../db/db.js'

const PORT = process.env.PORT || 3000
myDB.then(() => {
    app.listen(PORT, async (req, res) => {
        console.log(PORT)
        console.log('Вот така херня-малята')
    })    
}).catch(err => {
    next(err)
})