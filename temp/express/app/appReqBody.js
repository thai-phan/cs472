import express from "express";

const app = express();

app.set('port', process.env.PORT || 3010);
const port = app.get('port');


//by default, request body is undefined

app.use(express.json())

//extended: true -> qs 
//extended: false ->querystring 
app.post('/form', express.urlencoded({ extended: true }), (req, res, next) => {
    console.log(req.body);
    res.send(req.body)
});

app.post('/json', (req, res, next) => {

    res.send(req.body)
});

app.listen(port, () => console.log(`Running on ${port}`))