import express from "express";

const app = express();

app.set('port', process.env.PORT || 3018);
const port = app.get('port');

app.get('/about', (req, res, next) => {//  /about 
    console.log('1...');
    next()
}, (req, res, next) => {
    console.log('2...');
    next('route');
    // next('anytext');
    // throw new Error();
}, (req, res, next) => {
    console.log('3...');
    res.send("3...");
})

app.get('/', (req, res, next) => { //  /about
    res.send("Hello world");
})

app.use(function (req, res, next) {
    res.status(404).send('Not found!');
});

app.use(function (err, req, res, next) {
    res.status(500).send('Server internal error');
});



app.listen(port, () => console.log(`Running on ${port}`))