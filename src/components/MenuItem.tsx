import Image from 'next/image';

type MenuItemProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function MenuItem({
  name,
  description,
  price,
  image,
}: MenuItemProps) {
  return (
    <div className="flex gap-4 border-b border-gray-200 pb-6">

      {/* Image */}
      <div className="relative w-24 h-24 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-lg font-semibold whitespace-nowrap">
            {price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-1">
          {description}
        </p>
      </div>

    </div>
  );
}