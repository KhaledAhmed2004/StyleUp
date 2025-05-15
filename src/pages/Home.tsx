import BestSelling from '@/components/BestSelling';
import CategoriesCTA from '@/components/CategoriesCTA';
import FeaturesCard from '@/components/FeaturesCard';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';

function Home() {
  return (
    <main>
      <Hero />
      <FeaturesCard />
      <BestSelling />
      <CategoriesCTA />
      <ProductList />
    </main>
  );
}

export default Home;
