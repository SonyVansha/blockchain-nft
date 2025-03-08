import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await res.json();
    if (res.ok) {
      Cookies.set("token", data.token);
      router.push("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input type="text" placeholder="Username" className="border p-2 w-full mb-3"
          value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Login</button>
      </form>

      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xs">Don&apos;t have an account? Sign up <Link href="/auth/register">here</Link>.</p>
      </div>
    </div>
  );
}
