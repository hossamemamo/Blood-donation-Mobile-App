require('./config/db');


const app = require('express')();
const port = 3000;

const UserRouter=require('./api/user');

const bodyParser = require('express').json;
app.use(bodyParser());


app.use('/user',UserRouter)

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});