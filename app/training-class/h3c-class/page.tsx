import CourseCatalog from "../../components/training/CourseCatalog";
import { type CatalogSearchParams, trainingVendors } from "../../components/training/catalog-data";

export default async function VendorTrainingPage({ searchParams }: { searchParams: Promise<CatalogSearchParams> }) {
  const vendor = trainingVendors.find((item) => item.slug === "h3c")!;
  return <CourseCatalog vendor={vendor} searchParams={await searchParams} />;
}
