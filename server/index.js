import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './db'
import middleware from './middleware'
import api from './api'

const app = express()
app.server = http.createServer(app)

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

db(() => {
  // Register middlewares
	app.use(middleware())

  // Register API routes
	app.use('/api', api())

  // Listen to port
	app.server.listen(process.env.PORT || 8080)

	console.log(`Started app on port ${app.server.address().port}`)
})

export default app
