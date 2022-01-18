let express = require('express');
let cors = require('cors');

let app = express();

let { getTransactions } = require('./controllers/transactions.controllers');

app.use(cors());
app.listen(4000, () => {});

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/transactions/:address', getTransactions);