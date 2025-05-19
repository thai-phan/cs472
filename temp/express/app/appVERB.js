import express from "express";
//instantiation
const app = express();

app.set('port', process.env.PORT || 3008);
const port = app.get('port');

// app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res, next) => {
    console.log(req.method);
    res.send(req.method)
})
app.post('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.method);
    res.send(req.method)
})
app.delete('/', (req, res, next) => {
    console.log(req.method);
    res.send(req.method)
})
app.put('/', (req, res, next) => {
    console.log(req.method);
    res.send(req.method)
})


//bootup
app.listen(port, () => console.log(`Running on ${port}`))