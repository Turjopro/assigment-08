export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-16">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Books</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact Us</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-2xl">📘</a>
          <a className="text-2xl">🐦</a>
          <a className="text-2xl">📷</a>
        </div>
      </nav>
      <aside>
        <p>© {new Date().getFullYear()} BookNest — Online Book Borrowing Platform</p>
        <p className="text-sm">Contact us: support@booknest.com</p>
      </aside>
    </footer>
  );
}