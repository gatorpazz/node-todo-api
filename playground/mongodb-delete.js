// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'})
  //   .then(result => {
  //     console.log(result);
  //   })
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'})
  //   .then(result => {
  //     console.log(result);
  //   });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then(result => {
  //     console.log(result);
  //   });
  db.collection('Users').deleteMany({name: 'Michael'})
    .then(result => {
      console.log('Deleted them');
    });
  db.collection('Users').findOneAndDelete({_id: ObjectID("5b7896bed70cf624b63e9007")})
    .then(result => {
      console.log('Deleted that one too');
    })
  // client.close();
});