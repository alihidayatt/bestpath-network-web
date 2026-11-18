import { notFound } from "next/navigation";
import CourseDetail from "../../../components/training/CourseDetail";
import { trainingVendors } from "../../../components/training/catalog-data";

export default async function TrainingDetailPage({ params }: { params: Promise<{ kelas_juniper_Id: string }> }) {
  const { kelas_juniper_Id } = await params;
  const vendor = trainingVendors.find((item) => item.slug === "juniper")!;
  const course = vendor.courses.find((item) => item.id.toString() === kelas_juniper_Id);
  if (!course) notFound();
  return <CourseDetail vendor={vendor} course={course} />;
}
