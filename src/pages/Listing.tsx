import FiterSidbar from '@/components/FilterSidebar';
import Footer from '@/components/shared/FooterWithNewsletter';
import Header from '@/components/shared/Header';

const Listing = () => {
  return (
    <div>
      <Header />
      <div>
        <FiterSidbar />
      </div>

      <Footer />
    </div>
  );
};

export default Listing;
