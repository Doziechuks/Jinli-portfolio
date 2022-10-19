import './productsOverview.css';
import ProductsItems from './productsItems';
import { withRouter } from "react-router-dom";

const ProductsOverview = ({ ProductCollections, history, match }) => {
  const { items, title, routeName } = ProductCollections
  return (
    <div className="productsOverview-wrapper">
      <div className="products-overview-title-box">
        <h1 className="products-title">{title}</h1>
        <div className="product-overview-underline" />
      </div>
      <div className="products-items-map">
        {items
          .filter((item, itemIndex) => itemIndex < 4)
          .map((item) => {
            return (
              <div key={item.id} className='overview-spread'>
                <ProductsItems items={item} />
              </div>
            );
          })}
      </div>
      <div className="view-more" onClick={() => history.push(`${match.url}${routeName}`)}>view more...</div>
    </div>
  );
}
 
export default withRouter(ProductsOverview);