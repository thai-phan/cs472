import express from 'express';

const app = express();
const router = express.Router();

// There should be an API endpoint for each basic math
// operation: addition, subtraction, multiplication, division, and modulus.
// • Each endpoint will receive the input numbers and return a JSON response
// with the results as follows: { results: 0 }. Use the EchoAPI vscode extension or
// Postman to test your API endpoints.
// • The calculator router should be designed with flexibility to receive the input
// numbers as query parameters, parameters, or in the body as JSON or
// urlEncoded format, For example, all these requests will return the same
// results value { results: 5 }:

// o GET /addition/2/3
// o GET /addition/?a=2&b=3
// o POST /addition/ BODY ?a=2&b=3
// o POST /addition/ BODY {a:2,b:3}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.all("/hi", (req, res, next) => {
  res.send("hi");
})

router.all("/addition{/:a}{/:b}", (req, res, next) => {
  let method = req.method
  if (method === "GET") {
    if (req.params && req.params.a && req.params.b) {
      const a = parseInt(req.params.a);
      const b = parseInt(req.params.b);
      return res.status(200).send({result: a + b});
    } else if (req.query) {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      return res.status(200).send({result: a + b});
    }
  }
  if (method === "POST") {
    if (req.body) {
      const a = parseInt(req.body.a);
      const b = parseInt(req.body.b);
      return res.status(200).send({result: a + b});
    }
  }
  return res.status(404).send("Not Found");
})

router.all("/subtraction{/:a}{/:b}", (req, res, next) => {
  let method = req.method
  if (method === "GET") {
    if (req.params && req.params.a && req.params.b) {
      const a = parseInt(req.params.a);
      const b = parseInt(req.params.b);
      return res.status(200).send({result: a - b});
    }
    if (req.query) {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      return res.status(200).send({result: a - b});
    }
  }
  if (method === "POST") {
    if (req.body) {
      const a = parseInt(req.body.a);
      const b = parseInt(req.body.b);
      return res.status(200).send({result: a - b});
    }
  }
  return res.status(404).send("Not Found");
})

router.all("/multiplication{/:a}{/:b}", (req, res, next) => {
  let method = req.method
  if (method === "GET") {
    if (req.params && req.params.a && req.params.b) {
      const a = parseInt(req.params.a);
      const b = parseInt(req.params.b);
      return res.status(200).send({result: a * b});
    }
    if (req.query) {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      return res.status(200).send({result: a * b});
    }
  }
  if (method === "POST") {
    if (req.body) {
      const a = parseInt(req.body.a);
      const b = parseInt(req.body.b);
      return res.status(200).send({result: a * b});
    }
  }
  return res.status(404).send("Not Found");
})


router.all('/division{/:a}{/:b}', (req, res, next) => {
  let method = req.method
  if (method === "GET") {
    if (req.params && req.params.a && req.params.b) {
      const a = parseInt(req.params.a);
      const b = parseInt(req.params.b);
      return res.status(200).send({result: a / b});
    }
    if (req.query) {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      return res.status(200).send({result: a / b});
    }
  }
  if (method === "POST") {
    if (req.body) {
      const a = parseInt(req.body.a);
      const b = parseInt(req.body.b);
      return res.status(200).send({result: a / b});
    }
  }
  return res.status(404).send("Not Found");
})

router.all('/modulus{/:a}{/:b}', (req, res, next) => {
  let method = req.method
  if (method === "GET") {
    if (req.params && req.params.a && req.params.b) {
      const a = parseInt(req.params.a);
      const b = parseInt(req.params.b);
      return res.status(200).send({result: a % b});
    }
    if (req.query) {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      return res.status(200).send({result: a % b});
    }
  }
  if (method === "POST") {
    if (req.body) {
      const a = parseInt(req.body.a);
      const b = parseInt(req.body.b);
      return res.status(200).send({result: a % b});
    }
  }
  return res.status(404).send("Not Found");
})

app.use(router);

app.listen(3000, () => {
  console.log('Your Server is running on 3000');
});