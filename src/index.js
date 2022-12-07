const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()

const userRoute= require('../routes/user');

//Middleware: URI de conexión para probar los request (GET, POST, DELETE, PUT)
app.use(express.json());
app.use('/api', userRoute);


//rutas del proyecto
app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

app.listen(port, ()=> console.log("Server listening on port", port))

app.get('/', (req, res)=> res.send('Bienvenido al index del proyecto'))

//Conexión con mongodb
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=> console.log('Connect with mongodb'))
.catch((error)=>console.error(error))

