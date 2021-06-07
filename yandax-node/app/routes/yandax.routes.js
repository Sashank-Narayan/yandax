module.exports = app => {
    const Yandax = require("../controllers/yandax.controller.js");
    //const { Router } = require("express");
    var router = require("express").Router();
    router.post("/",Yandax.create);
    router.get("/",Yandax.findAll);
    router.delete("/:id",Yandax.delete);
    app.use('/api/yandax',router);
}