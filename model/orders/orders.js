import { Schema, model } from 'mongoose'

const ordersSchema = new Schema({
    name: String,
    phone: String,
    street: String,
    building: String,
    orders: {
        type: Array,
    },
    owner: { name: String }
},
    {versionKey:false,timestamps:true},
)
const Orders = model('orders', ordersSchema)

export default Orders