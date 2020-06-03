import express from 'express'

const app = express();

app.get('/users', (req, res) => {
    res.json({'foo': 'bar'});
});

app.listen(3333);