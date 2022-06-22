const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./config/db.js');

const account=require('./routers/account.js');

const app = express();
app.use(bodyparser.json());

app.listen(3000, ()=>console.log('server started at port: 3000'));
app.use('/account',account);