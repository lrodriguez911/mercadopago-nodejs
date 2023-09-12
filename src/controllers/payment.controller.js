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
        ]
    })

    res.send("creating order")
}

export const success = (req, res) => res.send("success")

export const webhook = (req, res) => res.send("webhook");