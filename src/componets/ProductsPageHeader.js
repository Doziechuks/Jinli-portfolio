import './productsPageHeader.css';

const ProductsPageHeader = () => {
  const backgorundImage = "./images/officedesk.jpg";
  return (
    <div
      className="product-item-title"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${backgorundImage})`,
      }}
    >
      <h1>our products</h1>
      <div className="productpage-underline" />
    </div>
  );
}
 
export default ProductsPageHeader;