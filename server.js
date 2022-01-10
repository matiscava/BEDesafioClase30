const express = require('express');
const cluster = require('cluster');
const { is } = require('type-is');
const numCPUs = require('os').cpus().length;

const app = express();

const isCluster = process.argv[2] === 'CLUSTER';


if(cluster.isMaster && isCluster){
    console.log(`Cantidad de procesadores: ${numCPUs}`);
    console.log(`Master ${process.pid} is running`);

    //fork workers
    for( let i = 0 ; i<numCPUs;i++){
        cluster.fork()
    }

    cluster.on('exit' , worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString());
        cluster.fork()
    }) 
}
else
{
    const PORT = parseInt(process.argv[2]) || 8081;

    app.get('/', ( req , res ) => {
        res.send(`Servidor express in ${PORT} - <b> PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.get('/api/randoms', ( req , res ) => {
        res.send(`Servidor express in ${PORT} - <b> PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.get('/info', ( req , res ) => {
        res.send(`Servidor express in ${PORT} - <b> PID ${process.pid}</b> - ${new Date().toLocaleString()} - Cantidad de procesadores: ${numCPUs}`)
    })   

    app.listen( PORT , err => {
        if (!err) console.log(`Servidor express escuchando el puerto ${PORT} - PID ${process.pid}`);
    })

}
