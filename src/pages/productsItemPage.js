import './productsItemPage.css';
import ProductsItems from '../componets/productsItems';
import ComplimentSection from "../componets/complimentSection";
import FooterSection from "../componets/footer";
import { selectProductItems } from '../redux/productSelector';
import { connect } from 'react-redux';


const ProductsItemPage = ({ products }) => {
  const { title, items, backgroundCover } = products;
  return (
    <div className="showProducts-wrapper">
      <div
        className="showProducts-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${backgroundCover})`,
        }}
      >
        <h1>our {title} brands</h1>
        <div className="showProducts-underline" />
      </div>
      <div className="showproduct-box">
        <div className="showProducts-title">
          <h1>{title}</h1>
          <div className="showProducts-title-underline" />
        </div>
        <div className="showProducts-map">
          {items.map((item) => {
            return <ProductsItems key={item.id} items={item} />;
          })}
        </div>
      </div>
      <ComplimentSection />
      <FooterSection />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  products: selectProductItems(ownProps.match.params.productsId)(state)
}) 
export default connect(mapStateToProps)(ProductsItemPage);