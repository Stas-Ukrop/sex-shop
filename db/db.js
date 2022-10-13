import mongodb from 'mongodb'
import dotenv from 'dotenv/config'

const URI_DB = process.env.URI_DB

const myDB = mongodb.MongoClient.connect(
    URI_DB,
    {
        maxPoolSize: 5
    }
)
process.on('SIGINT', async () => {
    const db = await myDB
    db.close()
    console.log('время спатоньки')
    process.exit(1)
})

export default myDB