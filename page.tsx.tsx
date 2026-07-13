import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#09090f] min-h-screen">

      <Header />

      <Hero />

      <Section title="أحدث الحلقات"/>

      <Section title="الأكثر مشاهدة"/>

      <Section title="أنميات مكتملة"/>

      <Footer />

    </main>
  );
}