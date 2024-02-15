'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
  extended: true
}));

let htmlTop = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Zoha Zainab Akbarzadeh</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
      <link rel="manifest" href="site.webmanifest">
  </head>
  <body>
      <header>
          <img src="android-chrome-192x192.png" alt="zza logo"/>
          <h1>Zoha Zainab Akbarzadeh</h1>
      </header>
      <nav>
          <a href="index.html">Homepage</a>
          <a href="contact.html">Contact</a>
          <a href="gallery.html">Gallery</a>
          <a href="order.html">Order</a>
      </nav>
      <main>
`
let htmlBottom = `
  </main>
  <footer>&copy; 2023 Zoha Zainab Akbarzadeh</footer>
  </body>
  </html>
`


app.post('/contact', (req, res) => {
  const person = req.body.firstLast;
  const email = req.body.eAddress;
  const message = req.body.comments;    
  res.send(`${htmlTop}
    <h3>Hi, <strong>${person}</strong>.</h3>
    <p>We recieved your message. We'll be reaching out to you soon at the 
    provided email:<strong>${email}!</strong></p>
    <p>Your message was: <strong>"${message}"</strong></p>
    ${htmlBottom}
  `);
});



app.post('/placeOrder', (req, res) => {
  const base = req.body.base;
  const filling = req.body.filling;
  const size = req.body.size;
  const instructions = req.body.comments; 
  //const choice = comparer(req.body.brand);   
  //const cost = choice.price;
  //const costString = cost.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})
  const amount = req.body.amount;
  //const totalCost = amount*cost
  //const totalCostString = totalCost.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})
  res.send(`${htmlTop}
    <h3>Hi</h3>
    <p>You have placed an order for <strong>${amount}</strong> cheesecakes.  
    <br> Base: ${base} <br> Filling: ${filling} <br> Size: ${size} </p>
    <p>Estimated cost will be ___ 
    <p>We've sent a confirmation message to you according to your user preferences (available at user &#8594; settings) <br>You will 
    be notified of final cost and payment link within 12 hours.</p>
    ${htmlBottom}
  `);
});

app.use(express.static('public'));




app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

