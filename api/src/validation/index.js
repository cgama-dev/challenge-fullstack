import Joi from '@hapi/joi'

export const schemaDelivery = Joi.object().keys({
  name: Joi.string().required().messages({ 'string.empty': 'O campo name é obrigatorio' }),
  weight: Joi.string().required().messages({ 'string.empty': 'O campo weight é obrigatorio' }),
  address: {
    place: Joi.string().required().messages({ 'string.empty': 'O campo place é obrigatorio' }),
    number: Joi.string().required().messages({ 'string.empty': 'O campo number é obrigatorio' }),
    neighborhood: Joi.string().required().messages({ 'string.empty': 'O campo number é obrigatorio' }),
    complement: Joi.string().required().messages({ 'string.empty': 'O campo number é obrigatorio' }),
    city: Joi.string().required().messages({ 'string.empty': 'O campo number é obrigatorio' }),
    state: Joi.string().required().messages({ 'string.empty': 'O campo number é obrigatorio' }),
    country: Joi.string().required().messages({ 'string.empty': 'O campo number é obrigatorio' })
  },
  latitude: Joi.string().required().messages({ 'string.empty': 'O campo latitude é obrigatorio' }),
  longitude: Joi.string().required().messages({ 'string.empty': 'O campo longitude é obrigatorio' })
})
