const express = require('express')
const app = express()
let PORT =3000
const { userRoutes } = require('./Routes/userRoutes');
app.listen(PORT,()=>{
    console.log('Server is starting');
})









