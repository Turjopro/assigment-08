"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const user = session.user;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user.image || "https://i.pravatar.cc/150"}
                alt={user.name || "User"}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>

          <div className="divider"></div>

          <div className="w-full text-left space-y-2">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Member Since:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>

          <Link href="/profile/update" className="btn btn-primary mt-6">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
}