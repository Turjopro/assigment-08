"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import booksData from "@/data/books.json";

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  available_quantity: number;
  image_url: string;
};

export default function BookDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [borrowed, setBorrowed] = useState(false);

  const books: Book[] = booksData;
  const book = books.find((b) => b.id === Number(params.id));

  // Wait for session to load
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Private route: redirect if not logged in
  if (!session) {
    router.push("/login");
    return null;
  }

  if (!book) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Book not found</h2>
      </div>
    );
  }

  const handleBorrow = () => {
    setBorrowed(true);
    setTimeout(() => setBorrowed(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {borrowed && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>Book borrowed successfully! 📚</span>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Book Cover */}
        <div className="md:w-1/3">
          <img
            src={book.image_url}
            alt={book.title}
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg text-gray-500 mb-4">by {book.author}</p>
          <span className="badge badge-primary mb-4">{book.category}</span>
          <p className="text-base leading-relaxed mb-6">{book.description}</p>
          <p className="font-semibold mb-6">
            {book.available_quantity} copies left
          </p>

          <button onClick={handleBorrow} className="btn btn-primary btn-wide">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
}