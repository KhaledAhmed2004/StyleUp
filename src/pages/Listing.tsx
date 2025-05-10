import FiterSidbar from '@/components/FiterSidbar';
import NewsLatter from '@/components/NewsLatter';
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
