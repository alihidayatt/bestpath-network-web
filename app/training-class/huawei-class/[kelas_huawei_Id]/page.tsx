import { notFound } from "next/navigation";
import CourseDetail from "../../../components/training/CourseDetail";
import { trainingVendors } from "../../../components/training/catalog-data";

export default async function TrainingDetailPage({ params }: { params: Promise<{ kelas_huawei_Id: string }> }) {
  const { kelas_huawei_Id } = await params;
  const vendor = trainingVendors.find((item) => item.slug === "huawei")!;
  const course = vendor.courses.find((item) => item.id.toString() === kelas_huawei_Id);
  if (!course) notFound();
  return <CourseDetail vendor={vendor} course={course} />;
}
