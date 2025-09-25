import React from "react";

export default async function Member({
  params,
}: {
  params: Promise<{ memberId: string }>;
}) {
  const { memberId } = await params;

  return (
    <div>
      <h2>Member details {memberId}</h2>
    </div>
  );
}
