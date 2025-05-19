import express from "express";
import studentRouter from "./routes/studentRoute.js";
//instantiation
const app = express();

app.set('port', process.env.PORT || 3015);
const port = app.get('port');


app.use('/students', studentRouter);
// app.use('/courses', courseRouter);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Server Internal error ");
})
//bootup
app.listen(port, () => console.log(`Running on ${port}`))