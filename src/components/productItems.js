import './productItems.css';
import { withRouter } from 'react-router-dom';

const ProductItems = ({ products, history, match }) => {
  const {title, imageUrl, linkUrl} = products;
  return (
    <div className="product-item-wrapper">
      <div
        className="product-items-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      />
      <h1 className="product-section-title">visit {title} page</h1>
    </div>
  );
}
 
export default withRouter(ProductItems);