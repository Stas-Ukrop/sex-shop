import express from 'express'
import orders from './orders/orders.js'

const useApi = express.Router()

useApi.use('/order', orders)
useApi.use('/users', (req, res, next) => {
    next()
})

export default useApi