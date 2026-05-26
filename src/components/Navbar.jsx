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
                className="hover:text-orange-500 transition-colors duration-300"
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
              <Button variant="outline">Sign In</Button>
            </Link>

            <Link href="/signup">
              <Button variant="outline">Sign Up</Button>
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
