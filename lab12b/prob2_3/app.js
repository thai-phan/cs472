const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method === 'GET') {
    if (url === '/image') {
      const imagePath = path.join(__dirname, 'image.jpg');
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.end(data);
        }
      });
    } else if (url === '/pdf') {
      const pdfPath = path.join(__dirname, 'sample.pdf');
      fs.readFile(pdfPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'application/pdf' });
          res.end(data);
        }
      });
    } else if (url === '/about') {
      const aboutPath = path.join(__dirname, 'about.txt');
      fs.readFile(aboutPath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
    } else if (url === '/home' || url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to my website');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
