import Image from "next/image";
import { Star, Play } from "lucide-react";

interface Props {
  title: string;
  image: string;
  rating: string;
  episodes: number;
}

export default function AnimeCard({
  title,
  image,
  rating,
  episodes,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#151521] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,.35)]">

      <div className="relative aspect-[2/3]">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent"/>

        <div className="absolute top-3 left-3 bg-violet-600 px-3 py-1 rounded-full text-xs font-bold">
          جديد
        </div>

        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 text-sm">

          <Star size={14} fill="gold" color="gold"/>

          {rating}

        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

          <button className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center">

            <Play fill="white"/>

          </button>

        </div>

      </div>

      <div className="p-4">

        <h3 className="font-bold text-lg line-clamp-1">

          {title}

        </h3>

        <div className="flex justify-between text-gray-400 mt-2 text-sm">

          <span>{episodes} حلقة</span>

          <span>TV</span>

        </div>

      </div>

    </div>
  );
}