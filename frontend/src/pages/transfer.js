import { useState } from "react";
import { useRouter } from "next/router";

export default function TransferNFT() {
  const [id, setId] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const router = useRouter();

  const transferNFT = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/nfts/transfer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(id), newOwner }),
    });
    if (res.ok) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Transfer NFT</h1>
      <form onSubmit={transferNFT} className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <label className="block mb-2">ID NFT:</label>
        <input type="number" className="w-full p-2 border rounded mb-4" value={id} onChange={(e) => setId(e.target.value)} required />
        
        <label className="block mb-2">Pemilik Baru:</label>
        <input type="text" className="w-full p-2 border rounded mb-4" value={newOwner} onChange={(e) => setNewOwner(e.target.value)} required />
        
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Transfer NFT</button>
      </form>
    </div>
  );
}
