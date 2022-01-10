const express = require('express');

const app = express();

const PORT = 8080;

app.get( '/' , (req,res) => {
    res.send(`Servidor express in ${PORT} - <b> PID ${process.pid}</b> - ${new Date().toLocaleString()}`)

})

app.listen( PORT , err => {
    if (!err) console.log(`Servidor express escuchando el puerto ${PORT} - PID ${process.pid}`);
})
