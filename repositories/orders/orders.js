import Orders from '../../model/orders/orders.js'

const getAll = async () => {
    const result = await Orders.find({})
    return result
}
const getById = async (id) => {
    const result = await Orders.findOne({ _id: id })
    return result
}
const create = async (body) => {
    return await Orders.create(body)
}
const remove = async (id) => {
    const result = Orders.findOneAndRemove({ _id: id })
    return result
}
const update = async (id, body) => {
    const result = await Orders.findOneAndUpdate({ _id: id }, { ...body })
    return result
}

export default {
    getAll,
    getById,
    create,
    remove,
    update
}