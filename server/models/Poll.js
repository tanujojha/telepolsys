const mongoose = require('mongoose');
const {Schema} = mongoose;

const pollSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
    },
    question:{
        type: String,
        required: true,
    },
    option1:{
        type: String,
        required: true
    },
    option1:{
        type: String,
        required: true
    },
    option1:{
        type: String,
    },
    option1:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

const Poll = mongoose.model("poll", pollSchema);

module.exports = Poll;
