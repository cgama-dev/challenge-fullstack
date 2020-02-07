import DeliveryService from '../services/DeliveryService'

class DeliveryController {
  async query (req, res, next) {
    try {
      const deliveries = await DeliveryService.query()

      const countsDeliveriesFields = await DeliveryService.aggregateDelivery([
        'weight'
      ])

      return res.status(200).json({ deliveries, total: countsDeliveriesFields })
    } catch (e) {
      next(e)
    }
  }

  async create (req, res, next) {
    try {
      const { name, weight, address, latitude, longitude } = req.body
      const location = await DeliveryService.getLocation(latitude, longitude)
      const delivery = await DeliveryService.create({
        name,
        weight,
        address: {
          ...address,
          location
        }
      })
      return res.status(200).json(delivery)
    } catch (e) {
      next(e)
    }
  }

  async destroy (req, res, next) {
    try {
      const idDelivery = req.params.id
      const delivery = await DeliveryService.destroy(idDelivery)

      return res.status(200).json({ message: 'delivery deleted', delivery })
    } catch (e) {
      next(e)
    }
  }
}
export default new DeliveryController()
