import express from "express";

const app = express();

app.set('port', process.env.PORT || 3013);
const port = app.get('port');



app.get('/google', (req, res) => {
    res.redirect('https://www.google.com/');
});

app.get('/', (req, res) => {
    res.redirect('/user');
});

app.get('/user', (req, res) => {
    res.send('inside /user');
});
app.listen(port, () => console.log(`Running on ${port}`))