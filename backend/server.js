const express = require("express");

const bodyParser = require("body-parser");
const routes = require('./src/routes/nftRoutes');
const cors = require("cors");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

// Routes
app.use("/", routes);
app.use(errorHandler);

// console.log(nftBlockchain.nftBlockchain);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});