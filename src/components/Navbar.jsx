"use client";

import { authClient } from "@/lib/auth.client";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/all-courses" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-linear-to-tr from-violet-600 via-violet-500 to-orange-600 bg-clip-text text-transparent">
            SkillSphere
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="block px-2 py-2 text-slate-700 rounded-xl hover:bg-violet-500/15 hover:text-violet-700 transition-all duration-300 font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Section */}
        {!user ? (
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <Button
                variant="outline"
                className="border-blue-700 font-bold hover:bg-blue-50/50 transition-colors"
              >
                <span className="bg-gradient-to-tr from-black via-blue-800 to-blue-500 bg-clip-text text-transparent">
                  Sign In
                </span>
              </Button>
            </Link>

            <Link href="/signup">
              <Button className="bg-gradient-to-tr from-violet-600 via-violet-500 to-orange-600 text-white font-bold shadow-md hover:opacity-90 transition-opacity">
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Avatar
              src={user?.image}
              name={user?.name}
              className="cursor-pointer"
            />

            <Button variant="danger" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
