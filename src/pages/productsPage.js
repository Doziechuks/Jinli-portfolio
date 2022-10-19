import './productsPage.css';
import ProductsPageHeader from '../componets/ProductsPageHeader';
import ProductsOverview from '../componets/productsOverview';
import ComplimentSection from "../componets/complimentSection";
import FooterSection from "../componets/footer";
import { productsData } from '../componets/productsData';

const ProductsPage = () => {
  return ( 
    <div className="product-page-wrapper">
      <ProductsPageHeader />
      <div className="product-over-view">
      {
        productsData.map((items) => {
          return <ProductsOverview key={items.id} ProductCollections = { items } />
        })
      }
      </div>
      <ComplimentSection />
      <FooterSection />
      
    </div>
   );
}
 
export default ProductsPage;