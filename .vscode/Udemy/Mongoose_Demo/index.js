//javascript

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Connection open!');
  })
  .catch(err => {
    console.log('Error Connecting!');
    console.log(err);
  })

  