
import ProductCard from '../components/ProductCard';
import { products } from '../products';

const ForeverProducts = () => {
  return (
    <main className="container mx-auto p-4 text-right" dir="rtl">
      <h1 className="page-title">המוצרים שלנו</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ForeverProducts;