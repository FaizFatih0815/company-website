import HeroSection from "@/components/herosection";
import CompanySection from "@/components/companysection";
import BlogList from "@/components/bloglist";
import Testimoni from "@/components/testimoni";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white ">
      <HeroSection />
      <CompanySection />
      <BlogList />
      <Testimoni />
    </main>
  );
}
