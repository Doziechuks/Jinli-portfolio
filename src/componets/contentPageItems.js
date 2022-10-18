import './contactPageItems.css';

const ContatcPageItems = () => {
  const backgorundImage = "./images/contactphone.jpg";
  return (
    <div className="contact-item-wrapper">
      <div
        className="contact-item-title"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${backgorundImage})`,
        }}
      >
        <h1>get to know us</h1>
        <div className="aboutpage-underine" />
      </div>
    </div>
  );
}
 
export default ContatcPageItems;