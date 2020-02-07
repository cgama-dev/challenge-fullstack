import DeliveryRepository from '../repositories/DeliveryRepository'

class DeliveryService {
  async query () {
    return DeliveryRepository.query()
  }

  async create (data = {}) {
    return DeliveryRepository.create(data)
  }

  async destroy (id) {
    return DeliveryRepository.destroy(id)
  }

  async aggregateDelivery (fields = []) {
    const fieldsMap = fields.length ? fields.reduce((acc, field) => {
      const fieldModify = { [field]: { $sum: '$'.concat(field) } }
      return { ...acc, ...fieldModify }
    }, {}) : fields

    return DeliveryRepository.aggregateDelivery(fieldsMap)
  }

  async getLocation (latitude, longitude) {
    return {
      type: 'Point', coordinates: [longitude, latitude]
    }
  }
}

export default new DeliveryService()
