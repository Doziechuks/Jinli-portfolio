import './productSection.css';
import { homePageProductsData } from './productsData';
import ProductItems from './productItems';

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-title">
        <h1>our products</h1>
        <div className="products-underline"></div>
      </div>
      <div className="products-map">
        {
          homePageProductsData.map((products) => {
            return (
              <ProductItems key={products.id} products= { products } />
            );
          })
        }
      </div>
      {/* { {homePageProductsData.map((products) => {
        return (
          <div className="product-section-wrapper" key={products.id}>
            <ProductItems products={products} />
          </div>
        );
      }) */}
    </div>
  );
}
 
export default ProductSection;