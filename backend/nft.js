const fs = require('fs');
const { Blockchain } = require('./blockchain');

class NFTBlockchain extends Blockchain {
    constructor() {
        super();
        this.nfts = this.loadNFTs();
    }

    saveNFTs() {
        fs.writeFileSync('nfts.json', JSON.stringify(this.nfts, null, 2));
    }

    loadNFTs() {
        if (fs.existsSync('nfts.json')) {
            return JSON.parse(fs.readFileSync('nfts.json'));
        }
        return [];
    }

    mintNFT(name, owner, metadata) {
        const id = this.nfts.length + 1;
        const nft = { id, name, owner, metadata };
        this.nfts.push(nft);
        this.saveNFTs();
        this.addTransaction({ type: "NFT Minting", id, name, owner, metadata });
        return nft;
    }

    transferNFT(id, newOwner) {
        const nft = this.nfts.find(n => n.id === id);
        if (!nft) return null;
        nft.owner = newOwner;
        this.saveNFTs();
        this.addTransaction({ type: "NFT Transfer", id, newOwner });
        return nft;
    }

    getNFTs() {
        return this.nfts;
    }
}

module.exports = { NFTBlockchain };
