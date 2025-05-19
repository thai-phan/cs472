import express from "express";

const app = express();

app.set('port', process.env.PORT || 3019);
const port = app.get('port');

// app.use('/home', (req, res, next) => {
//     console.log('1...');
//     next();
// })
// app.use('/about', (req, res, next) => {
//     console.log('2...');
//     next();
// })
// app.use((req, res, next) => {
//     console.log('3...');
//     res.send("From server");
// })


app.use(middlewareThree)
app.use(middlewareOne)

app.get("/", middlewareTwo, middlewareFour, (req, res, next) => {
    console.log("Inside Home Page")
    res.send("Home Page")
})

app.use((req, res, next) => {
    console.log('it is');
    next()
})

app.use(function (req, res, next) { // /
    // next('ersadasdor')
    // throw Error('adad')
    res.status(404).send('Page Not Found!');
});

app.use(function (err, req, res, next) {
    res.status(500).send('something went wrong!');
});

function middlewareOne(req, res, next) {
    console.log("Middleware One")
    next()
}

function middlewareTwo(req, res, next) {
    console.log("Middleware Two")
    next('route')
}

function middlewareThree(req, res, next) {
    console.log("Middleware Three")
    next()
}

function middlewareFour(req, res, next) {
    console.log("Middleware Four")
    next()
}



app.listen(port, () => console.log(`Running on ${port}`))