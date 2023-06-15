const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config()

connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json())
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
