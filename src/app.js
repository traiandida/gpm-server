import express from 'express'
import config from './config'
import routes from './routes/tree.routes'

const app = express()

app.use(routes)
app.set('port', config.port)


export default app

