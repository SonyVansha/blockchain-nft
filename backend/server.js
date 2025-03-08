const express = require("express");
const bodyParser = require("body-parser");
const { NFTBlockchain } = require("./nft");

const app = express();
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());




const nftBlockchain = new NFTBlockchain();

// Endpoint untuk mendapatkan semua NFT
app.get("/nfts", (req, res) => {
    res.json(nftBlockchain.getNFTs());
});

// Endpoint untuk mencetak (mint) NFT baru
app.post("/nfts/mint", (req, res) => {
    const { name, owner, metadata } = req.body;
    if (!name || !owner || !metadata) {
        return res.status(400).json({ error: "Nama, pemilik, dan metadata harus diisi!" });
    }
    const nft = nftBlockchain.mintNFT(name, owner, metadata);
    nftBlockchain.minePendingTransactions();
    res.json(nft);
});

// Endpoint untuk mentransfer NFT ke pemilik baru
app.post("/nfts/transfer", (req, res) => {
    const { id, newOwner } = req.body;
    if (!id || !newOwner) {
        return res.status(400).json({ error: "ID NFT dan pemilik baru harus diisi!" });
    }
    const nft = nftBlockchain.transferNFT(id, newOwner);
    if (!nft) {
        return res.status(404).json({ error: "NFT tidak ditemukan" });
    }
    nftBlockchain.minePendingTransactions();
    res.json(nft);
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
