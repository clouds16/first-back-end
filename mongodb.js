const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'first-app'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
    if (error){
        return console.log('unable to connect to database')
    }  else {
        console.log('Connected to database')
    }

    const db = client.db(databaseName)


})