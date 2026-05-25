"use client";
import { Card } from "@heroui/react";
import { authClient } from "@/lib/auth.client";
import { Avatar } from "@heroui/react";
import { UpdateUserProfile } from "@/components/UpdateUserProfile";
const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  return (
    <div>
      <Card className="border mx-auto w-125 py-10 mt-5 flex flex-col items-center gap-4">
        <Avatar className="h-32 w-32">
          <Avatar.Image
            alt="Sabbir Ahmed"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h1 className="text-xl font-bold">Name: {user?.name}</h1>
        <p className="text-sm text-slate-500">Email: {user?.email}</p>
        <UpdateUserProfile/>
      </Card>
    </div>
  );
};

export default ProfilePage;
