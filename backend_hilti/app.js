const express = require('express');
const bodyparser = require('body-parser')
const userRouter = require('./routes/user.route');
const ProductRoutes = require('./routes/product.route');
const OrderRoutes = require('./routes/order.route')
const WalletRoutes = require('./routes/wallet.route')
const cors = require('cors')

const app = express();

const corsOptions = {
    origin: '*', // Replace with your app's domain
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

app.use(bodyparser.json());

app.use('/users',userRouter);
app.use('/product',ProductRoutes);
app.use('/order',OrderRoutes);
app.use('/wallet',WalletRoutes);
//app.use('/cart',)


module.exports = app;