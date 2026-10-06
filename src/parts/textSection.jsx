import React from "react";

export default function TextSection({ paragraphs, center = false }) {
  const alignClass = center ? "text-center" : "text-left";

  return (
    <section className="container px-16 mx-auto mt-10">
      <h1 className={`font-bold text-[50px] mb-8 ${alignClass}`}>
        {title}
      </h1>
      {paragraphs.map((block, idx) => (
        <div
          key={idx}
          className={`text-[24px] leading-10 mb-5 ${alignClass}`}
        >
          {block}
        </div>
      ))}
    </section>
  );
}
