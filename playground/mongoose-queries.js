const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5b78d57abdf0275c64a2712e11';
const userId = '5b78c4dbfcf4aa59d03fa687';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch(e => console.log(e));

User.findById(userId).then(user => {
  if(!user) {
    return console.log('user not found');
  }
  console.log('User', user);
}).catch(e => console.log(e));