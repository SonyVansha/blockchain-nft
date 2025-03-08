import Link from "next/link";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/mint" className="hover:underline">Mint NFT</Link>
        <Link href="/transfer" className="hover:underline">Transfer NFT</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
