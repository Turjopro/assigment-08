"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

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

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      setMessage("Update failed: " + error.message);
    } else {
      setMessage("Profile updated successfully!");
      setTimeout(() => router.push("/profile"), 1500);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Information
        </h2>

        {message && (
          <div
            className={`alert ${
              message.includes("failed") ? "alert-error" : "alert-success"
            } mb-4 text-sm`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}