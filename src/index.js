import express from "express";
import paymentRoutes from './routes/payment.routes.js'
import { PORT } from './config.js'
import path from 'path'

const app = express()



app.listen(PORT, () => {})
console.log('Server on Port', 3000);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve("src/public")))
app.use(paymentRoutes)

app.get('/', (req, res) => {
    res.send('Hello World');})