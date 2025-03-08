const fs = require("fs");

class NFTModel {
    constructor() {
        this.nfts = this.loadNFTs();
    }

    saveNFTs() {
        fs.writeFileSync("data/nfts.json", JSON.stringify(this.nfts, null, 2));
    }

    loadNFTs() {
        if (fs.existsSync("data/nfts.json")) {
            return JSON.parse(fs.readFileSync("data/nfts.json"));
        }
        return [];
    }

    getAllNFTs() {
        return this.nfts;
    }

    addNFT(nft) {
        this.nfts.push(nft);
        this.saveNFTs();
    }
    
    deleteNFT(id) {
      const index = this.nfts.findIndex((n) => n.id === id);
      if (index === -1) return null;

      const deletedNFT = this.nfts.splice(index, 1)[0];
      this.saveNFTs();
      return deletedNFT;
  }

    findNFTById(id) {
        return this.nfts.find(n => n.id === id);
    }
}

module.exports = new NFTModel();
