import express from "express";
import paymentRoutes from './routes/payment.routes.js'

const app = express()



app.listen(process.env.PORT || 3000, () => {})
console.log('Server on Port', 3000);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(paymentRoutes)

app.get('/', (req, res) => {
    res.send('Hello World');})