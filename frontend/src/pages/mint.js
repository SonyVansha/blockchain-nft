import { useState } from "react";
import { useRouter } from "next/router";

export default function MintNFT() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [metadata, setMetadata] = useState("");
  const router = useRouter();

  const mintNFT = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/nfts/mint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, owner, metadata }),
    });
    if (res.ok) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Mint NFT</h1>
      <form onSubmit={mintNFT} className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <label className="block mb-2">Nama NFT:</label>
        <input type="text" className="w-full p-2 border rounded mb-4" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label className="block mb-2">Pemilik NFT:</label>
        <input type="text" className="w-full p-2 border rounded mb-4" value={owner} onChange={(e) => setOwner(e.target.value)} required />
        
        <label className="block mb-2">Metadata URL (Gambar):</label>
        <input type="text" className="w-full p-2 border rounded mb-4" value={metadata} onChange={(e) => setMetadata(e.target.value)} required />
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Mint NFT</button>
      </form>
    </div>
  );
}
