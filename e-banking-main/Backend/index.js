const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./config/db.js');

const account=require('./routers/account.js');
const customer=require('./routers/customer.js');
const transaction=require('./routers/transaction.js');
const LoginRoute=require('./routers/login');
const UserRoute =require('./routers/user');
const admin=require('./routes/admin.js')


const app = express();
app.use(bodyparser.json());

app.listen(3000, ()=>console.log('server started at port: 3000'));
app.use('/account',account);
app.use('/customer',customer);

app.use('/transaction',transaction);
app.use('/user',UserRoute)
app.use('/api',LoginRoute)
app.use('/admin',admin)