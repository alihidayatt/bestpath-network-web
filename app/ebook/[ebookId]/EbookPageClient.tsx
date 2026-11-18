"use client";

import Link from "next/link";
import { ebook_data } from "../ebook_data";

export default function EbookPageClient({ ebookId }: { ebookId: string }) {
  // The server page validates this ID before rendering the client.
  const book = ebook_data.find((ebook) => ebook.id.toString() === ebookId);
  if (!book) return null;

  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <Link className="text-link" href="/ebook">Back to ebooks</Link>
        <p className="eyebrow">{book.bayar ? "Paid ebook" : "Free ebook"}</p>
        <h1>{book.title}</h1>
        <p className="lead">{book.harga}</p>
      </header>
      <div className="ebook-layout">
        <div className="book-cover">{book.img}</div>
        <div className="prose">
          <section aria-labelledby="ebook-author">
            <h2 id="ebook-author">Author</h2>
            <p>{book.author}</p>
          </section>
          <section className="content-section" aria-labelledby="ebook-synopsis">
            <h2 id="ebook-synopsis">Sinopsis</h2>
            <p lang="id">{book.description}</p>
          </section>
          <div className="content-section">
            {book.bayar ? (
              <>
                <a className="btn btn--secondary" href={book.link1} target="_blank" rel="noopener noreferrer">Read ebook demo</a>{" "}
                <a className="btn btn--primary" href={book.link2} target="_blank" rel="noopener noreferrer">Buy ebook</a>
              </>
            ) : (
              <a className="btn btn--primary" href={book.link1} target="_blank" rel="noopener noreferrer">Download ebook</a>
            )}
            <p>Opens an external website in a new tab.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
