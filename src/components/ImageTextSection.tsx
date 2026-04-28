"use client";

import Image from "next/image";

type ImageTextSectionProps = {
  title: string;
  description: string;
  author?: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

export default function ImageTextSection({
  title,
  description,
  author,
  imageSrc,
  imageAlt = "Section image",
  imagePosition = "left",
}: ImageTextSectionProps) {
  return (
    <section className="w-full px-6 py-10">
      <div
        className={`
          flex flex-col md:flex-row items-stretch
          ${imagePosition === "right" ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />{" "}
          </div>
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 flex">
          <div className="bg-white text-black p-6 md:p-12 flex flex-col justify-center w-full">
            <h2 className="text-3xl font-display mb-4">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <p className="mt-4 font-medium">{author}</p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
