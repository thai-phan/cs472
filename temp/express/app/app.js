import express from "express";
//instantiation
const app = express();

app.set('port', process.env.PORT || 3017);
const port = app.get('port');

//configuration
// app.disable("case sensitive routing"); //
app.set("case sensitive routing", false); // /about == /About
// app.set("case sensitive routing", true); // /about !== /About



app.use((req, res, next) => {
    console.log('---------------------------------');
    next();
});

app.use('/about', (req, res, next) => {// /About,,  /contact/about
    throw new Error("error");
    console.log('About me');
    res.send("About me page")
    // res.status(200).json({ name: "Anna", age: 25 });
});


app.use((req, res, next) => {
    console.log('This middleware always run!');
    next();
});

app.use('/products', (req, res, next) => {// /About, /contact/about
    console.log('In the middleware!');
    res.send('The "Products" Page');
});

app.use(['/', '/home'], (req, res, next) => { // /,  /About,  /contact/*
    console.log('In another middleware!');
    res.send('Hello from Express');
});

app.use((req, res, next) => {
    console.log('will not reach here');
    res.status(404).send("Page not found")
});

//error handling middleware
app.use((err, req, res, next) => {
    console.log('error handled');
    next("anytinf except route");
    // res.send("something went wrong");
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server Internal error" });
})

//bootup
app.listen(port, () => console.log(`Running on ${port}`))