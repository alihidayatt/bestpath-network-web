"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="wrap">
      <header className="page-intro">
        <p className="eyebrow">Page error</p>
        <h1>This page could not load</h1>
        <p className="lead" role="alert">An unexpected error interrupted this page. Try loading it again or return to the homepage.</p>
        <button className="btn btn--primary" type="button" onClick={reset}>Try loading again</button>{" "}
        <Link className="btn btn--secondary" href="/">Return home</Link>
      </header>
    </div>
  );
}
