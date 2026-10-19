import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export default function CategoryCard({
  name,
  slug,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={`/recipes/category/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Category Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Category Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">
          {name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-4 text-sm font-semibold text-gray-900">
          View Recipes →
        </div>
      </div>
    </Link>
  );
}