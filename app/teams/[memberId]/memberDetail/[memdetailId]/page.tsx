import React from "react";

export default function MemberDetailId({
  params,
}: {
  params: {
    memberId: string;
    memdetailId: string;
  };
}) {
  return (
    <>
      <div>
        <h2>
          Member {params.memberId} detail of {params.memdetailId}
        </h2>
      </div>
    </>
  );
}
