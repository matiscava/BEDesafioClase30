const express = require('express');
const cluster = require('cluster');
const { fork } = require('child_process');
const logger = require('./src/logger');
const compression = require('compression');
const numCPUs = require('os').cpus().length;


const app = express();
app.use(compression())

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
        logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
        res.send(`Servidor express in ${PORT} - <b> PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.get('/api/randoms', ( req , res ) => {
        logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
        let cantidad = req.query.cant;

        if (!cantidad || isNaN(cantidad)) {
            cantidad = 1000000000;
        }
        const objeto = fork('./src/utils/calcRandomNumbers')
        objeto.send(cantidad);
        objeto.on('message', numeros => {
            res.send(numeros)
        })
    })

    app.get('/info', compression() , ( req , res ) => {
        logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
        
        console.log('CODIGO SINCRONICO (demosra tiempo y bloquea la ejecucion de las siguientes lineas');
        
        res.send(`Servidor express in ${PORT} - <b> PID ${process.pid}</b> - ${new Date().toLocaleString()} - Cantidad de procesadores: ${numCPUs}`)
    })   

    app.listen( PORT , err => {
        if (!err) console.log(`Servidor express escuchando el puerto ${PORT} - PID ${process.pid}`);
    })

}
