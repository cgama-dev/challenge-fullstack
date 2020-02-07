import { Router } from 'express'
import validate from 'express-joi-validation'
import DeliveryController from './controllers/DeliveryController'
import { schemaDelivery } from './validation'

const routes = Router()
const validator = validate.createValidator({ passError: true })

routes.get('/deliveries', DeliveryController.query)
routes.post('/deliveries', validator.body(schemaDelivery), DeliveryController.create)
routes.delete('/deliveries/:id', DeliveryController.destroy)

export default routes
