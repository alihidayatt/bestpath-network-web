import Link from "next/link";
import { ebook_data } from "./ebook_data";

export default function EbookPage() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">Learning resources</p>
        <h1>Ebooks for network engineers</h1>
        <p className="lead">Browse {ebook_data.length} handbooks, workbooks, and career guides. Choose a title to read its synopsis and find the download or purchase options.</p>
      </header>
      <div className="card-grid">
        {ebook_data.map((book) => (
          <article key={book.id} className="card">
            <div className="book-cover">{book.frontImg}</div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.harga}</p>
            <Link className="text-link" href={`/ebook/${book.id}`} aria-label={`Read ebook details: ${book.title}`}>Read ebook details</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
