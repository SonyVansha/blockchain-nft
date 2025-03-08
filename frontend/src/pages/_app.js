import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!Cookies.get("token"));
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    window.location.href = "/auth/login";
  };

  return (
    <div>
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/mint" className="hover:underline">Mint NFT</Link>
      <Link href="/transfer" className="hover:underline">Transfer NFT</Link>
    </nav>
    <Component {...pageProps} />
  </div>
    // <div>
    //   <nav className="bg-blue-600 text-white p-4 flex justify-between">
    //     <div>
    //       <Link href="/" className="mr-4">Home</Link>
    //       {isAuthenticated && (
    //         <>
    //           <Link href="/mint" className="mr-4">Mint NFT</Link>
    //           <Link href="/transfer" className="mr-4">Transfer NFT</Link>
    //         </>
    //       )}
    //     </div>
    //     {isAuthenticated ? (
    //       <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
    //     ) : (
    //       <Link href="/auth/login">Login</Link>
    //     )}
    //   </nav>
    //   <Component {...pageProps} />
    // </div>
  );
}
