"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left: Logo */}
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-primary">
          📚 BookNest
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right: Conditional Auth */}
      <div className="navbar-end gap-2">
        {session ? (
          <>
            <span className="font-medium hidden sm:inline">
              {session.user?.name}
            </span>
            <button onClick={handleLogout} className="btn btn-sm btn-outline">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}