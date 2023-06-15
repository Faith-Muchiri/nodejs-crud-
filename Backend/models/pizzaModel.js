const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the pizza name"],
    },
    image: {
        type: String,
        required: [true, "Please upload the pizza image"],

    },
    description: {
        type: String,
        required: [true, "Please add the pizza description"],
    }, 
    price: {
        type: Number,
        required: [true, "Please add the pizza price"],
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Pizza", pizzaSchema)