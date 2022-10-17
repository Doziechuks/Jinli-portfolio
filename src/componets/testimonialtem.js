import './testimonialItem.css'

const TestimonialItem = ({ testimonials }) => {
  const { imageUrl, info, name, ceo } = testimonials;
  return (
    <div className='testimony-item-wrapper'>
       <div className="testimony-box">
          <div className="testimony-image-box">
            <img src={imageUrl} className="img-testimonial" />
          </div>
          <div className="testimony-message">
            <p>
              {info}
            </p>
            <div className="ceo">
              <h3>{ name }</h3>
              <p>CEO {ceo}</p>
            </div>
          </div>
        </div>
    </div>
  );
}
 
export default TestimonialItem;