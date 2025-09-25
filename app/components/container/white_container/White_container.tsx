import React from "react";

interface WhiteContainerProps {
  content: React.ReactNode; // bisa string atau elemen React
}

export default function White_container({ content }: WhiteContainerProps) {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg">{content}</div>
    </div>
  );
}
