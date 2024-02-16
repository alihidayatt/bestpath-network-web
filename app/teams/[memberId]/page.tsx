import React from "react";

export default function Member({ params }: { params: { memberId: string } }) {
  return (
    <div>
      <h2>Member details {params.memberId} </h2>
    </div>
  );
}
