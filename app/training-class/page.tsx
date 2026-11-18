import CourseCatalog from "../components/training/CourseCatalog";
import { type CatalogSearchParams } from "../components/training/catalog-data";

export default async function TrainingPage({ searchParams }: { searchParams: Promise<CatalogSearchParams> }) {
  return <CourseCatalog searchParams={await searchParams} />;
}
