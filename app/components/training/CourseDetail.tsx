import Link from "next/link";
import { type TrainingCourse, type TrainingVendor, vendorPath } from "./catalog-data";

export default function CourseDetail({ course, vendor }: { course: TrainingCourse; vendor: TrainingVendor }) {
  // Huawei's existing page publishes only the standard investment, without these terms.
  const hasPrivateTerms = vendor.slug !== "huawei";
  const inquiry = `mailto:sales@bestpath-network.com?subject=${encodeURIComponent(`Training inquiry: ${vendor.name} ${course.title}`)}`;

  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <Link className="text-link" href={vendorPath(vendor.slug)}>Back to {vendor.name} classes</Link>
        <p className="eyebrow">{vendor.name} training</p>
        <h1>Kelas Training {course.title}</h1>
        {course.comingSoon ? <p className="lead">Coming Soon</p> : <a className="btn btn--primary" href={inquiry}>Request this training</a>}
      </header>

      <div className="course-layout">
        <section aria-labelledby="course-facts-heading">
          <h2 id="course-facts-heading" className="section-heading">Course facts</h2>
          <dl className="course-facts">
            <div><dt>Level</dt><dd>{course.level || "Informasi tidak tersedia."}</dd></div>
            <div><dt>Duration</dt><dd>{course.duration || "Informasi tidak tersedia."} (09.00-17.00 WIB)</dd></div>
            <div><dt>{hasPrivateTerms ? "Investment (Minimum 2 Pax)" : "Investment"}</dt><dd>Rp.{course.investment || "Informasi tidak tersedia."}</dd></div>
            {hasPrivateTerms && <div><dt>Investment (Kelas Private)</dt><dd>Rp.{course.investment_p || "Informasi tidak tersedia."}</dd></div>}
            <div><dt>Intended For</dt><dd>{course.intended || "Informasi tidak tersedia."}</dd></div>
            <div><dt>Prerequisite</dt><dd>{course.prerequisite || "Tidak ada prerequisite."}</dd></div>
          </dl>
          {hasPrivateTerms && <p>Catatan: Tidak Termasuk Faktur Pajak</p>}
          {!course.comingSoon && <p>Untuk reservasi jadwal, <a className="text-link" href={inquiry}>email sales@bestpath-network.com</a>.</p>}
        </section>

        <div className="prose">
          <section aria-labelledby="course-overview">
            <h2 id="course-overview" className="section-heading">Overview</h2>
            <p>{course.overview}</p>
          </section>
          <section aria-labelledby="course-goals">
            <h2 id="course-goals" className="section-heading">Goals</h2>
            <p>{course.goals || "Tidak ada goals yang terdaftar."}</p>
          </section>
          <section className="syllabus" aria-labelledby="course-syllabus">
            <h2 id="course-syllabus" className="section-heading">Syllabus</h2>
            {course.syllabus.map((item, index) => /^Day \d+/.test(item) ? (
              <h3 key={index}>{item}</h3>
            ) : (
              <ul key={index}><li>{item}</li></ul>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
