"use client";

import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto mt-6 px-6">

      <div className="relative overflow-hidden rounded-3xl border border-white/10 h-[560px]">

        {/* الخلفية */}
        <Image
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1800&auto=format&fit=crop"
          alt="hero"
          fill
          priority
          className="object-cover"
        />

        {/* طبقة سوداء */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090f] via-[#09090fd9] to-transparent" />

        {/* طبقة بنفسجية */}
        <div className="absolute inset-0 bg-violet-900/20" />

        {/* المحتوى */}
        <div className="relative z-10 h-full flex items-center justify-between px-16">

          {/* النص */}
          <div className="max-w-xl">

            <span className="bg-violet-600 px-4 py-2 rounded-full text-sm">
              الحلقة الخامسة متوفرة الآن
            </span>

            <h1 className="text-6xl font-black mt-6">
              SOLO LEVELING
            </h1>

            <p className="text-violet-300 text-xl mt-2">
              سولو ليفلينج
            </p>

            <div className="flex gap-3 mt-6">

              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                مستمر
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                أكشن
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                خيال
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                2024
              </span>

            </div>

            <p className="mt-8 text-gray-300 leading-8">
              قبل عشر سنوات ظهرت البوابات التي تربط عالم البشر بعوالم
              الوحوش، ويبدأ البطل رحلته ليصبح أقوى صياد في العالم.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="flex items-center gap-3 bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-xl font-bold">

                <Play size={20} />

                ابدأ المشاهدة

              </button>

              <button className="flex items-center gap-3 border border-white/20 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-xl">

                <Info size={20} />

                عرض التفاصيل

              </button>

            </div>

          </div>

        </div>

        {/* الأسهم */}

        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center hover:bg-violet-600 transition">

          <ChevronLeft />

        </button>

        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center hover:bg-violet-600 transition">

          <ChevronRight />

        </button>

        {/* النقاط */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

          <div className="w-8 h-2 rounded-full bg-violet-500"></div>

          <div className="w-2 h-2 rounded-full bg-white/40"></div>

          <div className="w-2 h-2 rounded-full bg-white/40"></div>

          <div className="w-2 h-2 rounded-full bg-white/40"></div>

        </div>

      </div>

    </section>
  );
}
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Play, Info } from "lucide-react";

const slides = [
  {
    title: "Solo Leveling",
    subtitle: "سولو ليفلينج",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=2000&q=80",
  },
  {
    title: "Jujutsu Kaisen",
    subtitle: "جوجوتسو كايسن",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=2000&q=80",
  },
  {
    title: "Attack on Titan",
    subtitle: "هجوم العمالقة",
    image:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=2000&q=80",
  },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop
        className="rounded-3xl overflow-hidden"
      >

        {slides.map((anime) => (
          <SwiperSlide key={anime.title}>

            <div className="relative h-[620px]">

              <Image
                src={anime.image}
                alt={anime.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

              <div className="absolute left-20 top-1/2 -translate-y-1/2 max-w-xl">

                <span className="bg-violet-600 px-4 py-2 rounded-full">
                  جديد
                </span>

                <h1 className="text-7xl font-black mt-6">
                  {anime.title}
                </h1>

                <p className="text-violet-300 text-2xl mt-2">
                  {anime.subtitle}
                </p>

                <p className="text-gray-300 mt-6 leading-8">
                  شاهد أحدث الحلقات بجودة عالية مع أفضل تجربة مشاهدة
                  وتصميم احترافي مستوحى من منصات بث الأنمي.
                </p>

                <div className="flex gap-4 mt-8">

                  <button className="bg-violet-600 px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-violet-700 transition">

                    <Play size={20} />

                    ابدأ المشاهدة

                  </button>

                  <button className="bg-white/10 backdrop-blur px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white/20 transition">

                    <Info size={20} />

                    التفاصيل

                  </button>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}