import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">This address does not match a page on our website. Return home or browse the training catalog.</p>
        <Link className="btn btn--primary" href="/">Return home</Link>{" "}
        <Link className="btn btn--secondary" href="/training-class">Find training classes</Link>
      </header>
    </div>
  );
}
