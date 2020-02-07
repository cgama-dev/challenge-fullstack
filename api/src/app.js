import dotenv from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes'
import connect from './database'

class App {
  constructor () {
    this.express = express()
    this.midllewares()
    this.database()
    this.routes()
    this.exeption()
  }

  midllewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  database () {
    connect()
  }

  routes () {
    this.express.use(routes)
  }

  exeption () {
    this.express.use(async (err, req, res, next) => {
      if (err && (err.error || err.name)) {
        return res.status(400).json({
          type: err.name ? err.name : err.type,
          message: err.name ? err.errmsg : err.error.toString()
        })
      }

      return res.status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

export default new App().express
