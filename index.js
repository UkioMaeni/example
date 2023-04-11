const express = require('express');
const { Pool } = require('pg');
const cors = require("cors");
require('dotenv').config();
const userRouter=require('./routers/userRouter')
const locationRouter = require("./routers/locationRouter");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use('/api',userRouter)
app.use('/api',locationRouter)
app.use('/person',express.static(__dirname+'/static/person'))
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});