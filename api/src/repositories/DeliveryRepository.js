
import DeliveryModel from './../models/DeliveryModel'

class DeliveryRepository {
  async query () {
    return DeliveryModel.find()
  }

  async aggregateDelivery (fields = {}) {
    return DeliveryModel.aggregate([
      { $group: { _id: null, ...fields, count: { $sum: 1 } } }
    ])
  }

  async create (data) {
    return DeliveryModel.create(data)
  }

  async destroy (id) {
    return DeliveryModel.findOneAndDelete({ _id: id })
  }
}

export default new DeliveryRepository()
