import { Search, User, Moon, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#09090f]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <div className="text-3xl font-black text-violet-500">

          AnimeHub

        </div>

        <nav className="hidden lg:flex gap-8">

          <a href="#">الرئيسية</a>
          <a href="#">الأفلام</a>
          <a href="#">المواسم</a>
          <a href="#">الأكثر مشاهدة</a>
          <a href="#">اتصل بنا</a>

        </nav>

        <div className="flex items-center gap-4">

          <div className="relative">

            <Search
              className="absolute right-3 top-3"
              size={18}
            />

            <input
              className="bg-[#181825] rounded-full h-11 w-72 pr-10 pl-4 outline-none"
              placeholder="ابحث..."
            />

          </div>

          <Moon size={22} />

          <Settings size={22} />

          <button className="bg-violet-600 rounded-full px-5 py-2 flex gap-2">

            <User />

            دخول

          </button>

        </div>

      </div>

    </header>
  );
}