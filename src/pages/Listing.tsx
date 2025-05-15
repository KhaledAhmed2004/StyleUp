import FilterSidebar from '@/components/FilterSidebar';
import FooterWithNewsletter from '@/components/shared/FooterWithNewsletter';
import Header from '@/components/shared/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, X } from 'lucide-react';

const Listing = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main Content Section */}
      <div className="flex flex-1 gap-6 px-4 py-8">
        {/* Sidebar */}
        <div className="w-64">
          <FilterSidebar />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 space-y-6">
          {/* Applied Filters */}
          <div>
            <h2 className="mb-2 text-lg font-semibold">Applied Filters:</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                Perfume <X className="h-3 w-3 cursor-pointer" />
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                Size: M <X className="h-3 w-3 cursor-pointer" />
              </Badge>
            </div>
          </div>

          {/* Result Info and Sort */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing 1 to 9 out of 38 results
            </p>
            <Button variant="outline" className="flex items-center gap-1">
              Sort by <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Product listing would go here */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Map through your product cards here */}
          </div>
        </div>
      </div>

      <FooterWithNewsletter />
    </div>
  );
};

export default Listing;
