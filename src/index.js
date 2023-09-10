import express from "express";
import paymentRoutes from './routes/payment.routes.js'
import { PORT } from './config.js'
const app = express()



app.listen(PORT, () => {})
console.log('Server on Port', 3000);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(paymentRoutes)

app.get('/', (req, res) => {
    res.send('Hello World');})