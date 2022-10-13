import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv/config'
import number from './helpers/magicNumber.js'
import useApi from './routers/index.js'


const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json());

app.use('/api', useApi)

app.use((req, res) => {
    res.status(number.ANSWER_404).json({status:'error',code:number.ANSWER_404,message:'Not found'})
})
app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
        status: status === 500 ? 'fail' : 'error',
        code: status,
        message:err.message
    })
})

export default app