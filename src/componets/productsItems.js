import './productsItems.css';

const ProductsItems = ({ items }) => {
  const { name, imageUrl } = items
  return (
    <div className="products-items-wrapper">
      <a href="#">
        <div className="single-project">
          <img className="single-img" src={imageUrl} />
          <p className="single-icon">purchase</p>
        </div>
      </a>
      <div className="hr-rule" />
      <a href="#">
        <h1 className="product-item-name">{name}</h1>
      </a>
      <div className="mobile-name-purchase">
        <h1 className="product-item-name-mobile">{name}</h1>
        <a href="#" className="single-icon-mobile">
          purchase
        </a>
      </div>
    </div>
  );
}
 
export default ProductsItems;