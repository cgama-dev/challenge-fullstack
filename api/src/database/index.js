import mongoose from 'mongoose'
import { URI } from './../config/database'
class Database {
  connect () {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    mongoose.Promise = global.Promise

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'))

    db.once('open', () => {
      console.log(`Conectado no MongoDB: ${new Date()}`)
    })
  }
}

export default new Database().connect
