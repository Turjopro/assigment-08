"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await signUp.email({
      email,
      password,
      name,
      image: photoUrl,
    });

    if (error) {
      setError(error.message || "Registration failed");
    } else {
      router.push("/login");
    }
  };

  const handleGoogleSignUp = async () => {
  await signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {error && (
          <div className="alert alert-error mb-4 text-sm">{error}</div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignUp} className="btn btn-outline w-full">
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="link link-primary">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}