import { notFound } from "next/navigation";
import CourseDetail from "../../../components/training/CourseDetail";
import { trainingVendors } from "../../../components/training/catalog-data";

export default async function TrainingDetailPage({ params }: { params: Promise<{ kelas_h3c_id: string }> }) {
  const { kelas_h3c_id } = await params;
  const vendor = trainingVendors.find((item) => item.slug === "h3c")!;
  const course = vendor.courses.find((item) => item.id.toString() === kelas_h3c_id);
  if (!course) notFound();
  return <CourseDetail vendor={vendor} course={course} />;
}
