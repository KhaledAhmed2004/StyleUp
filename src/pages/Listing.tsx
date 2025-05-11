import FiterSidbar from '@/components/FilterSidebar';
import NewsLatter from '@/components/Newsletter';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const Listing = () => {
  return (
    <div>
      <Header />
      <div>
        <FiterSidbar />
      </div>
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default Listing;
