import { useEffect, useState } from "react";

export default function Home() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetchNFTs();
  }, []);

  const fetchNFTs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/nfts`);
    const data = await res.json();
    setNfts(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">NFT Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-white p-4 rounded shadow">
            <img src={nft.metadata} alt={nft.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{nft.name}</h2>
            <p className="text-gray-600">Owner: {nft.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
