asyncHandler = require('express-async-handler')
const Pizza = require('../models/pizzaModel')
// @desc Get all pizzas
// @route GET /api/pizzas
// @access public
const getPizzas = asyncHandler(async(req, res) => {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas)
});

// @desc Get a pizza
// @route GET /api/pizzas/:id
// @access public
const getPizza = asyncHandler(async(req, res) => {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
        res.status(404);
        throw new Error("Pizza not found");
    }
    res.status(200).json(pizza);
});

// @desc Create New pizza
// @route POST /api/pizzas
// @access public
const createPizza = asyncHandler(async(req, res) => {
    console.log("The request body is :", req.body);
    const {name,image, description, price } = req.body;
    if (!name || !image || !description || !price) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    const pizza = await Pizza.create({
        name,
        image,
        description,
        price,
    });

    res.status(201).json(pizza)
});

// @desc Update a pizza
// @route PUT /api/pizzas/:id
// @access public
const updatePizza = asyncHandler(async(req, res) => {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
        res.status(404);
        throw new Error("Pizza not found");
    }
    const updatedPizza = await Pizza.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true }
    )
    res.status(200).json(updatedPizza);
});

// @desc Delete a pizza
// @route DELETE /api/pizzas/:id
// @access public
const deletePizza = asyncHandler(async(req, res) => {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
        res.status(404);
        throw new Error("Pizza not found");
    }
    // await pizza.remove();
    await Pizza.findByIdAndRemove(req.params.id);
    res.status(200).json(pizza)
});

module.exports = { getPizzas, getPizza, createPizza, updatePizza, deletePizza}