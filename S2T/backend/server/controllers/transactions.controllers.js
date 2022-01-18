let request = require('request');

const getTransactions = (req, res) => {
    const BASE_URL = 'https://api.cryptoapis.io/v1/bc/btc/mainnet/address/';
    const API_KEY = 'd45bcc3bb736ddd5d0bd7fac45149f24cf4491a4';
    const BIT_COIN_ADDRESS = '1DBrYbe5U7LGDcHA5tiLCxivZ7JZAGqGhJ';

    const requestOptions = {
        "method": "GET",
        "url": `${BASE_URL}${req.params.address}/transactions`,
        "headers": {
            "Content-Type": "application/json",
            "X-API-Key": API_KEY
        }
    };

    try {
        request(requestOptions, (error, response) => {
            if (!error && response.statusCode === 200) {
                res.status(200).send({
                    status: 200,
                    message: 'Success',
                    data: response
                });
            } else if (response.statusCode === 404) {
                res.status(404).send({
                    status: 404,
                    message: 'No Data Found',
                    data: {}
                });
            } else if (error) {
                res.status(500).send({
                    status: 500,
                    message: 'Failure',
                    data: 'Bad Request. No Data Fetched.'
                });
            } else {
                res.status(response.statusCode).send({
                    status: response.statusCode,
                    message: 'Something Went Wrong',
                    data: 'Request Executed and received an error.',
                    error
                });
            }
        });
    } catch (error) {
        res.status(503).send({
            status: 503,
            message: 'Something Went Wrong. Request Execution failed',
            data: {},
            error
        });
    }
};

module.exports = { getTransactions };