import express from "express";

const app = express();
// const port = 300;

app.set('port', process.env.PORT || 3009);
const port = app.get('port');


app.use(express.static('./public'))
app.use((req, res, next) => res.send("Hello"))

app.use((req, res, next) => {
    res.send('Hello world');
})





app.listen(port, () => console.log(`Running on ${port}`))