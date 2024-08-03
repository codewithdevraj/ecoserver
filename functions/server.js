const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("../utils/connection");
const userRoutes = require("../routes/userRoutes");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(bodyParser.json());
app.use(cors(
  {
    origin: '*',
  }
));

app.get("/test", (req, res) => {
  res.send("hellow Ibm");
});

// app.use('/',authroutes)

app.use("/.netlify/functions/server", userRoutes);
module.exports.handler = serverless(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));