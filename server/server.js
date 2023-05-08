require('./config/db');


const app = require('express')();
const port = 3000;

const UserRouter=require('./api/user');
const BloodRouter = require('./api/blood');

const bodyParser = require('express').json;
app.use(bodyParser());


app.use('/user',UserRouter)
app.use('/blood',BloodRouter)

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});