const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')
//this is the middleware from where all the requests are funneled through
/*
app.use((req, res, next)=>{
  res.status(200).json({
    message:'it is working bitch!'
  });
});
*/
//now the work of this middleware will be to trannsfer the request to productRoutes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
module.exports=app;
