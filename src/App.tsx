import BestSelling from './components/BestSelling';
import CategoriesCTA from './components/CategoriesCTA';
import FeaturesCard from './components/FeaturesCard';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Header from './components/shared/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesCard />
      <BestSelling />
      <CategoriesCTA />
      <ProductList />
    </>
  );
}

export default App;
