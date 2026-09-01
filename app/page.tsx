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

export default function Home() {
  const books: Book[] = booksData;
  const featuredBooks = books.slice(0, 4);

  return (
    <div>
      {/* Banner Section */}
      <div className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Find Your Next Read</h1>
            <p className="py-6">
              Explore thousands of books across every genre, borrow digitally,
              and never miss a good story again.
            </p>
            <Link href="/all-books" className="btn btn-primary">
              Browse Now
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-primary text-primary-content py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          New Arrivals: {books[0].title} | Special Discount on Memberships |
          New Arrivals: {books[4].title} | Join now and get your first book
          free! | New Arrivals: {books[8].title} | Special Discount on
          Memberships |
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
  key={book.id}
  className="card bg-base-100 shadow-xl animate__animated animate__fadeInUp"
>
              <figure className="h-56">
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                <div className="card-actions justify-end mt-2">
                  <Link
                    href={`/books/${book.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Section 1: Categories */}
      <div className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-xl font-semibold">📖 Story</h3>
              <p className="text-sm text-gray-500 mt-2">
                Dive into fiction, drama, and timeless tales.
              </p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-xl font-semibold">💻 Tech</h3>
              <p className="text-sm text-gray-500 mt-2">
                Sharpen your skills with the latest in technology.
              </p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-xl font-semibold">🔬 Science</h3>
              <p className="text-sm text-gray-500 mt-2">
                Explore the mysteries of the universe and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Section 2: Why Choose Us */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose BookNest?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold">📦 Huge Collection</h3>
            <p className="text-sm text-gray-500 mt-2">
              Thousands of titles across every genre and category.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">⚡ Fast & Easy</h3>
            <p className="text-sm text-gray-500 mt-2">
              Borrow your favorite books in just a few clicks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🔒 Secure</h3>
            <p className="text-sm text-gray-500 mt-2">
              Your data and account are always safe with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}