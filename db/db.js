import mongoose from 'mongoose'
import dotenv from 'dotenv/config'

const URI_DB = process.env.URI_DB

const myDB = mongoose.MongoClient.connect(
    URI_DB,
    {
        useUnifiedTopology:true,
        maxPoolSize: 5
    }
)
mongoose.connection.on('connected', () => {
    console.log(`Connection open ${URI_DB}`)
})
mongoose.connection.on('error', (e) => {
    console.log(`Error mongoose connection ${e.message}`)
})
mongoose.connection.on('disconnected', (e) => {
    console.log(`Mongoose disconnected`)
})
process.on('SIGINT', async () => {
    mongoose.connection.close(() => {
        console.log('время спатоньки')
        process.exit(1)        
    })
})

export default myDB