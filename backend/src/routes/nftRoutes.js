const express = require('express');
const { transferNFT, mintNFT, getNFTs, deleteNFT } = require('../controllers/nftController');
const app = express.Router();

app.post("/nfts/transfer", transferNFT );
app.post("/nfts/mint", mintNFT);
app.get("/nfts", getNFTs)
app.delete("/nfts/:id", deleteNFT);

module.exports = app;