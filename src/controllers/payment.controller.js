import mercadopago from "mercadopago";


export const createOrder = async (req, res) => {
    
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN
    
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "jbl charge 5",
                unit_price: 100,
                currency_id: "ARS",
                quantity: 1
            }
        ],
        back_urls: {
                        success: "http://localhost:3000/success",
                        failure: "http://localhost:3000/failure",
                        pending: "http://localhost:3000/pending"
                    },
        notification_url: "http://localhost:3000/webhook",
    })

    res.send("creating order")
}

export const success = (req, res) => res.send("success")

export const recieveWebhook = async (req, res) => {
    const payment = req.query;

    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment.data.id)
            console.log(data);
        }
    res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({error: error.message})
    
    }
   

    res.send("webhook");
}