const mongoose = require('mongoose');

const mongouri = "mongodb://localhost:27017/telepolsysDB";



function connectToMongo() {
  mongoose.connect(mongouri, ()=> {
    console.log("mongoose connected");
  });

}

module.exports = connectToMongo;
