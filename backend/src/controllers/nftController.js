const NFTService = require("../services/nftService");

const getNFTs = (req, res) => {
    res.json(NFTService.getNFTs());
};

const mintNFT = (req, res) => {
    const { name, owner, metadata } = req.body;
    if (!name || !owner || !metadata) {
        return res.status(400).json({ error: "Nama, pemilik, dan metadata harus diisi!" });
    }

    const nft = NFTService.mintNFT(name, owner, metadata);
    res.json(nft);
};

const transferNFT = (req, res) => {
    const { id, newOwner } = req.body;
    if (!id || !newOwner) {
        return res.status(400).json({ error: "ID NFT dan pemilik baru harus diisi!" });
    }

    const nft = NFTService.transferNFT(id, newOwner);
    if (!nft) {
        return res.status(404).json({ error: "NFT tidak ditemukan" });
    }

    res.json(nft);
};

// Hapus NFT berdasarkan ID
const deleteNFT = (req, res) => {
  const { id } = req.params;
  const deletedNFT = NFTService.deleteNFT(parseInt(id));

  if (!deletedNFT) {
      return res.status(404).json({ error: "NFT tidak ditemukan" });
  }

  res.json({ message: "NFT berhasil dihapus", deletedNFT });
};
module.exports = { getNFTs, mintNFT, transferNFT, deleteNFT };