import express from "express";

const app = express();

app.set('port', process.env.PORT || 3011);
const port = app.get('port');

app.use('/search', (req, res, next) => {
    console.log(req.query);
    res.send(req.query)
})

app.listen(port, () => console.log(`Running on ${port}`))