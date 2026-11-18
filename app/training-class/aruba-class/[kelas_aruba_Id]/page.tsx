import { notFound } from "next/navigation";
import CourseDetail from "../../../components/training/CourseDetail";
import { trainingVendors } from "../../../components/training/catalog-data";

export default async function TrainingDetailPage({ params }: { params: Promise<{ kelas_aruba_Id: string }> }) {
  const { kelas_aruba_Id } = await params;
  const vendor = trainingVendors.find((item) => item.slug === "aruba")!;
  const course = vendor.courses.find((item) => item.id.toString() === kelas_aruba_Id);
  if (!course) notFound();
  return <CourseDetail vendor={vendor} course={course} />;
}
