import express from 'express'
import config from './config'
import routes from './routes/tree.routes'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(express.static('public'))
app.use(routes)
app.set('port', config.port)


export default app

