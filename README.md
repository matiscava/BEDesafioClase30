## 1.

```
npm start FORK // to run in fork mode

npm start CLUSTER // to run in cluster mode

npm start // fork is default mode

```

## 2. Run with nodemon

```
// FORK:

nodemon server.js // to run with nodemon mode fork

tasklist // to see the list of process

2 procesos

// CLUSTER:

nodemon server.js CLUSTER // to run with nodemon mode cluster

tasklist // to see the list of process

6 procesos

```

## 3. Run with forever

```
// FORK:

forever -w server.js // to run with forever mode fork

forever list // list of process with forever
    1 proceso
tasklist // to see the list of process
    2 procesos

// CLUSTER:

forever -w server.js CLUSTER // to run with forever mode cluster

forever list // list of process with forever
    2 procesos
tasklist // to see the list of process
    6 procesos

```

## 3. Run with PM2

```
// FORK:

pm2 start server.js FORK --name=fork -w // to run with PM2 mode fork

pm2 list // 1 process

// CLUSTER:

pm2 start server.js CLUSTER --name=cluster-test -w -i max // to run with PM2 mode fork

pm2 list // 4 process

```
