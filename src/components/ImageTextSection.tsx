'use client';

import Image from 'next/image';

type ImageTextSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
};

export default function ImageTextSection({
  title,
  description,
  imageSrc,
  imageAlt = 'Section image',
  imagePosition = 'left',
}: ImageTextSectionProps) {
  return (
    <section className="w-full px-6 py-10">
      <div
        className={`
          flex flex-col md:flex-row items-center gap-8
          ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}
        `}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}