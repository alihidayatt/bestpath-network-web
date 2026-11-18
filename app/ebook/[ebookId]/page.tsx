import { notFound } from "next/navigation";
import { ebook_data } from "../ebook_data";
import EbookPageClient from "./EbookPageClient";

export default async function EbookPage({
  params,
}: {
  params: Promise<{ ebookId: string }>;
}) {
  const { ebookId } = await params;

  if (!ebook_data.some((ebook) => ebook.id.toString() === ebookId)) {
    notFound();
  }

  return <EbookPageClient ebookId={ebookId} />;
}
