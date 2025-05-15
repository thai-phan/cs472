import express from 'express';
const app = express();


app.get("/image", (req, res, next) => {
  res.sendFile("image.jpg", { root: "." });
})

app.get("/pdf", (req, res, next) => {
  res.sendFile("sample.pdf", { root: "." });
})

app.get('/about', (req, res, next) => {
  res.sendFile("about.txt", { root: "." });
})

app.get('/home', (req, res, next) => {
  res.send("Welcome to my website");
})

app.use((req, res, next) => {
  res.status(403).send("Page Not Found");
})

app.listen(3000, () => {
  console.log('Your Server is running on 3000');
});