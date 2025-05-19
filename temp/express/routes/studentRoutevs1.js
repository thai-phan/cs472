import express from "express";
const router = express.Router();



router.route('/')
    .get((req, res, next) => {
        // throw new Error("woops error");
        // next('err')
        console.log(req.url + req.method + req.body);
        res.send("retrieved");
    })
    .post(express.urlencoded({ extended: false }), (req, res, next) => {
        console.log(req.url + req.method + req.body);
        res.send("inserted");
    })

router.route('/:id')
    .delete((req, res, next) => {
        console.log(req.url + req.method + req.params);
        res.send("deleted");
    })
    .put(express.urlencoded({ extended: false }), (req, res, next) => {
        console.log(req.url + req.method + req.body + req.params);
        res.send("updated");
    })


export default router;