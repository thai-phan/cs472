import express from "express";

const app = express();

app.set('port', process.env.PORT || 3012);
const port = app.get('port');

app.use('/api/v1/users/:zip/:city/:state', (req, res, next) => {
    console.log("zip: ", req.params.zip);
    console.log("city: ", req.params.city);
    res.send(req.params)
})

app.listen(port, () => console.log(`Running on ${port}`))