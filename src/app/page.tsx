import FeaturedPost from "@/components/page/home/FeaturedPost";
import HeroSection from "@/components/page/home/Hero";
import QuotesSection from "@/components/page/home/Motivated";


export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturedPost />
      <QuotesSection />
    </main>
  );
}
