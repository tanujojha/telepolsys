const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')

connectToMongo();


const app = express();
app.use(cors());
const port = 5000;


app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pollsys', require('./routes/poll'));


app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
