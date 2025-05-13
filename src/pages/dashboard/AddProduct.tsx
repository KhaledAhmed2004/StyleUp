import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddProduct = () => {
  return (
    <div className="mx-auto max-w-xl p-6">
      <h2 className="mb-4 text-2xl font-bold">Add Product</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter title"
            className="pl-9"
          />
        </div>
        <div>
          <Label htmlFor="stockStatus">Stock Status</Label>
          <Input
            id="stockStatus"
            type="text"
            placeholder="Stock status"
            className="pl-9"
          />
        </div>
        <div>
          <Label htmlFor="price">Product Price</Label>
          <Input
            id="price"
            type="text"
            placeholder="Product price"
            className="pl-9"
          />
        </div>
        <div>
          <Label htmlFor="quantity">Available Quantity</Label>
          <Input
            id="quantity"
            type="text"
            placeholder="Available quantity"
            className="pl-9"
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            type="text"
            placeholder="Category"
            className="pl-9"
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" type="text" placeholder="Slug" className="pl-9" />
        </div>
        <div>
          <Label htmlFor="sku">SKU</Label>
          <Input id="sku" type="text" placeholder="SKU" className="pl-9" />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            placeholder="Description"
            className="pl-9"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
