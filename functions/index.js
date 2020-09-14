const functions = require('firebase-functions');
// building an express appp and host it on a cloud function
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQBhdB9L19YcppNg1v8kuAsC6Z7xNyqo2gpozG1TWpAmycX9xuBMJq0kgGqlK0StYnSGFTLldq5iB37QngFvdni008ixNmep5');

//API set up an API


// app config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//  API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) =>{
    const total = req.query.total;
    console.log('payments request received for this amoount >>>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub units of the currency
        currency: 'usd',
    });

    // 201 created something
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//Listen command
exports.api = functions.https.onRequest(app);



// Example EndPoint
// http://localhost:5001/clone-8a53f/us-central1/api