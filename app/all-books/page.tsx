"use client";

import { useState } from "react";
import Link from "next/link";
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

export default function AllBooksPage() {
  const books: Book[] = booksData;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Story", "Tech", "Science"];

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search books by title..."
          className="input input-bordered w-full max-w-xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Category Sidebar */}
        <aside className="md:w-56 shrink-0">
          <h2 className="font-semibold text-lg mb-3">Categories</h2>
          <ul className="menu bg-base-100 rounded-box shadow-md">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={
                    selectedCategory === cat ? "active font-semibold" : ""
                  }
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Book Cards */}
        <div className="flex-1">
          {filteredBooks.length === 0 ? (
            <p className="text-center text-gray-500">No books found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <div key={book.id} className="card bg-base-100 shadow-xl">
                  <figure className="h-56">
                    <img
                      src={book.image_url}
                      alt={book.title}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-lg">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.category}</p>
                    <div className="card-actions justify-end mt-2">
                      <Link
                        href={`/books/${book.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}