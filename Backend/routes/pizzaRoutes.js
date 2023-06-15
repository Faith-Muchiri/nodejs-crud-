const express = require("express");
const router = express.Router();
const { getPizzas, getPizza, createPizza, updatePizza, deletePizza} = require("../controllers/pizzaController")

// router.route("/").get(getPizzas).post(createPizza);
router.route("/").get(getPizzas);
router.route("/").post(createPizza);

// router.route("/:id").put(updatePizza).delete(deletePizza).get(getPizza);
router.route("/:id").put(updatePizza)
router.route("/:id").delete(deletePizza)
router.route("/:id").get(getPizza)

module.exports = router;
