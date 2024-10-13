import FeaturedPost from "@/components/page/home/FeaturedPost";
import FeaturedCategory from "@/components/page/home/FeturedCategory";
import HeroSection from "@/components/page/home/Hero";
import QuotesSection from "@/components/page/home/Motivated";
import PopularPosts from "@/components/page/home/PopularPost";
import PostsSectionHome from "@/components/page/home/PostsSectionHome";
import TopNotchPostSection from "@/components/page/home/TodayTopNotch";
import Container from "@/components/shared/Container/Container";


export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturedCategory />
      <FeaturedPost />
      <Container>
        <PopularPosts />
      </Container>
      <PostsSectionHome />
      <TopNotchPostSection />
      <QuotesSection />
    </main>
  );
}
