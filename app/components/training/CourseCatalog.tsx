import Link from "next/link";
import { ArrowUpRightIcon, ClockIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import {
  type CatalogSearchParams,
  type TrainingVendor,
  levelKey,
  trainingVendors,
  vendorPath,
} from "./catalog-data";

export default function CourseCatalog({
  searchParams,
  vendor,
}: {
  searchParams: CatalogSearchParams;
  vendor?: TrainingVendor;
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : "";
  const selectedVendor = typeof searchParams.vendor === "string" ? searchParams.vendor : "";
  const selectedLevel = typeof searchParams.level === "string" ? searchParams.level : "";
  const action = vendor ? vendorPath(vendor.slug) : "/training-class";
  const vendors = vendor ? [vendor] : trainingVendors;
  const courses = vendors.flatMap((item) => item.courses.map((course) => ({ course, vendor: item })));
  const levels = [...new Set(courses.map(({ course }) => levelKey(course.level)).filter(Boolean))];
  const results = courses.filter(({ course, vendor: item }) =>
    (!selectedVendor || item.slug === selectedVendor) &&
    (!selectedLevel || levelKey(course.level) === levelKey(selectedLevel)) &&
    (!query.trim() || `${item.name} ${course.title}`.toLowerCase().includes(query.trim().toLowerCase()))
  );

  return (
    <div className="wrap">
      {/* Compact introduction: course discovery takes priority over a full-screen hero. */}
      <header className="page-intro" data-enter>
        <p className="eyebrow">Technical training</p>
        <h1>{vendor ? `${vendor.name} training classes` : "Find your training class"}</h1>
        <p className="lead">Compare course levels, duration and investment, then review the full syllabus.</p>
        {vendor && <Link className="text-link" href="/training-class">Browse all training classes</Link>}
      </header>

      <form className="catalog-form" action={action} method="get">
        <div className="field">
          <label htmlFor="course-query">Search courses</label>
          <input id="course-query" name="q" type="search" defaultValue={query} placeholder="Course title or vendor" />
        </div>
        <div className="field">
          <label htmlFor="course-vendor">Vendor</label>
          <select id="course-vendor" name="vendor" defaultValue={selectedVendor}>
            <option value="">{vendor ? vendor.name : "All vendors"}</option>
            {vendors.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="course-level">Level</label>
          <select id="course-level" name="level" defaultValue={selectedLevel}>
            <option value="">All levels</option>
            {levels.map((level) => <option key={level} value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</option>)}
          </select>
        </div>
        <button className="btn btn--primary" type="submit">Find courses</button>
        <Link className="btn btn--secondary" href={action}>Reset filters</Link>
      </form>

      {!vendor && (
        <nav aria-label="Training vendors">
          <p>Browse by vendor: {trainingVendors.map((item, index) => (
            <span key={item.slug}>
              {index > 0 && " · "}
              <Link className="text-link" href={vendorPath(item.slug)}>{item.name}</Link>
            </span>
          ))}</p>
        </nav>
      )}

      <section aria-labelledby="course-results">
        <h2 id="course-results" className="section-heading">{results.length} {results.length === 1 ? "course" : "courses"} found</h2>
        {results.length ? (
          <div className="card-grid">
            {results.map(({ course, vendor: item }) => (
              <article className="card course-card" key={`${item.slug}-${course.id}`}>
                <p className="eyebrow course-card__vendor">{item.name}</p>
                <h3>{course.title}</h3>
                <div className="course-card__meta">
                  {course.level && <span><AcademicCapIcon aria-hidden="true" />{course.level}</span>}
                  <span><ClockIcon aria-hidden="true" />{course.duration || "Duration not available"}</span>
                </div>
                <div className="course-card__investment">
                  <p>Investment</p>
                  <p className="course-card__price">{course.investment ? <>Rp<span>{course.investment}</span></> : "Informasi tidak tersedia."}</p>
                </div>
                {course.comingSoon ? (
                  <p className="course-card__status">Coming Soon</p>
                ) : (
                  <Link className="course-card__link" href={`${vendorPath(item.slug)}/${course.id}`}>View {course.title} course<ArrowUpRightIcon aria-hidden="true" /></Link>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p>No courses match these filters. Try another title, vendor or level, or <Link className="text-link" href={action}>reset filters</Link>.</p>
        )}
      </section>
    </div>
  );
}
