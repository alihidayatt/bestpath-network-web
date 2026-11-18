import { notFound, redirect } from "next/navigation";

// Numeric legacy IDs follow the published team order. Name aliases use the
// existing profiles rather than creating biographies for placeholder pages.
const memberAnchors: Record<string, string> = {
  "1": "danu-wiyoto",
  danu: "danu-wiyoto",
  "danu-wiyoto": "danu-wiyoto",
  "2": "aldi-arya-putra-pebriana",
  aldi: "aldi-arya-putra-pebriana",
  "aldi-arya-putra-pebriana": "aldi-arya-putra-pebriana",
  "3": "damar-galih-kalicki",
  damar: "damar-galih-kalicki",
  "damar-galih-kalicki": "damar-galih-kalicki",
  "4": "angga-daffa-prasetya",
  angga: "angga-daffa-prasetya",
  "angga-daffa-prasetya": "angga-daffa-prasetya",
};

export default async function Member({ params }: { params: Promise<{ memberId: string }> }) {
  const { memberId } = await params;
  const anchor = Object.hasOwn(memberAnchors, memberId) ? memberAnchors[memberId] : undefined;
  if (!anchor) notFound();
  redirect(`/teams#${anchor}`);
}
