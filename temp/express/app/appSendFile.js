import express from "express";
import path from 'path';
import url from 'url';

const app = express();

app.set('port', process.env.PORT || 3014);
const port = app.get('port');

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/img', 'dog.jpg'));
});


app.get('/pdf', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public/pdfs', 'lesson.pdf'));
});
app.use('/posts', (req, res) => {
    let data = [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse", "body": "est rerum tempore"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi"
    }
    ];
    res.status(200).json(data);
});

// a common way to send status number response.status(200).send('Welcome')



app.listen(port, () => console.log(`Running on ${port}`))