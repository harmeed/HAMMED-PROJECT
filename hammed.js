const dotenv = require ("dotenv");
dotenv.config();






const express =  require ("express");
const { default: mongoose } = require("mongoose");
const hammed = express();
const hammedrouter= require("./hammedroute/hammedform");


const port = process.env.PORT || 5600
const env = process.env.NODE_ENV




hammed.use (express.json());
hammed.use (hammedrouter);



mongoose.connect(process.env.MONGODB_ENV, ()=>{
    console.log("we are here in grazac");
});


hammed.listen(port,()=>{
    console.log (`we are live on ${port}`);
    console.log (`we are live on ${env}`);
    
})


