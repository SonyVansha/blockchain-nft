const nftModel = require("../models/nftModel");
const blockchain = require("../models/blockchainModel");

class NFTService {
    static mintNFT(name, owner, metadata) {
        const id = nftModel.nfts.length + 1;
        const nft = { id, name, owner, metadata };

        nftModel.addNFT(nft);
        blockchain.addTransaction({ type: "NFT Minting", id, name, owner, metadata });
        blockchain.minePendingTransactions();

        return nft;
    }

    static transferNFT(id, newOwner) {
        const nft = nftModel.findNFTById(id);
        if (!nft) return null;

        nft.owner = newOwner;
        nftModel.saveNFTs();
        blockchain.addTransaction({ type: "NFT Transfer", id, newOwner });
        blockchain.minePendingTransactions();

        return nft;
    }

    static deleteNFT(id) {
      const deletedNFT = nftModel.deleteNFT(id);
      if (!deletedNFT) return null;

      blockchain.addTransaction({ type: "NFT Deletion", id });
      blockchain.minePendingTransactions();

      return deletedNFT;
  }

    static getNFTs() {
        return nftModel.getAllNFTs();
    }
}

module.exports = NFTService;
