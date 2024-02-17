import React from "react";

export default function White_container({
  params,
}: {
  params: { content: string };
}) {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg">{params.content}</div>
      </div>
    </>
  );
}
