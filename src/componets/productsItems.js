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
        <h1 className="product-item-name">{name}</h1>
        <div className="mobile-name-purchase">
          <h1 className="product-item-name-mobile">{name}</h1>
          <p className="single-icon-mobile">purchase</p>
        </div>
      </a>
    </div>
  );
}
 
export default ProductsItems;