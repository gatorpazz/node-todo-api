// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b786f1b1888345426881b58')
  // }).toArray()
  //   .then(docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, err => {
  //     console.log('Unable to fetch todos', err);
  //   });

  db.collection('Users').find({name: 'John'}).count()
    .then(count => {
      console.log(`Todos Count: ${count}`);
    }, err => {
      console.log('Unable to fetch todos', err);
    });

  //client.close();
});