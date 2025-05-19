import express from "express";
//instantiation
const app = express();

app.set('port', process.env.PORT || 3000);
const port = app.get('port');



app.all('/students', (req, res, next) => { // /students, /students/contact
    res.send("It is app.all")
})

app.use('/students', (req, res, next) => { // /students/*
    res.send("It is app.use")
})

//bootup
app.listen(port, () => console.log(`Running on ${port}`))