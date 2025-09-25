import React from "react";

export default async function MemberDetailId({
  params,
}: {
  params: Promise<{ memberId: string; memdetailId: string }>;
}) {
  const { memberId, memdetailId } = await params;

  return (
    <div>
      <h2>
        Member {memberId} detail of {memdetailId}
      </h2>
    </div>
  );
}
