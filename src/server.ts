import * as express from 'express'
import { createConnection } from 'typeorm'
import * as methodOverride from 'method-override'
import { RegisterRoutes } from './routes'
import './controllers/usersController'

const app = express()

createConnection().then(connection => {
  app.use('/swagger.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json')
  })

  app.use(methodOverride())

  RegisterRoutes(app)
  app.listen(3000)
})
