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
    <div className="max-w-7xl mx-auto w-full">
      <Card className="border mx-auto w-125 py-10 mt-5 flex flex-col items-center gap-4">
        <Avatar className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
          <Avatar.Image
            alt="Sabbir Ahmed"
            src={user?.image}
            referrerPolicy="no-referrer"
            className="object-cover"
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
