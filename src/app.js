const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.get("/resturants", async (request, response) => {
    const resturants = await Resturant.findAll({});
    response.json(resturants);
})


module.exports = app;