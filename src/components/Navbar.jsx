"use client";
import { authClient } from "@/lib/auth.client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="w-7.5 h-7.5 object-contain"
          />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"all-courses"}>All Courses</Link>
          </li>
          <li>
            <Link href={"/pricing"}>My Profile</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex ">
          {!user && (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>Sign In</Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex items-center gap-4">
              <Avatar>
                <Avatar.Image
                  alt="Sabbir Ahmed"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
