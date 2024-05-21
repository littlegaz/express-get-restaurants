const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/resturants", async (request, response) => {
    const restaurants = await Resturant.findAll({});
    response.json(restaurants);
});

app.get("/resturants/:id", async (request, response) => {
    const number = request.params.id;
    const resturant = await Resturant.findByPk(number);
    response.json(resturant);
});

app.post("/resturants", async (rec, res) => {
    const resturant = await Resturant.create(req.body);
    res.json(resturant);
});

app.put("/resturants/:id", async (req, res){
    const updateRest = await Restaurant.update(req.body, {where: {id: req.params.is}});
    res.json(updateRest);
});

app.delete("/resturants/:id", async (req, res) =>{
    const deletedRest = await Resturant.destroy({where: {id: req.params.id}});
    res.jason(deletedRest);
});

module.exports = app;