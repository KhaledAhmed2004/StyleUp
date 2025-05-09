import BestSelling from '@/components/BestSelling';
import CategoriesCTA from '@/components/CategoriesCTA';
import FeaturesCard from '@/components/FeaturesCard';
import Hero from '@/components/Hero';
import NewsLatter from '@/components/NewsLatter';
import ProductList from '@/components/ProductList';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturesCard />
      <BestSelling />
      <CategoriesCTA />
      <ProductList />
      <NewsLatter />
      <Footer />
    </main>
  );
}

export default Home;
