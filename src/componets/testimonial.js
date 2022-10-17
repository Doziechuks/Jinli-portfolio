import './testimonial.css';
import TestimonialItem from './testimonialtem';
import { testimonialData } from './testimonialData';

const TestimonialSection = () => {
  return (
    <div
      className="testimonial-section-wrapper"
      style={{ backgroundImage: `url(${"./images/testimonial.jpg"})` }}
    >
      <div className="gradiend-box">
        <div className="testimony-title">
          <h1>our customers testimonies</h1>
          <div className="testimony-underline" />
        </div>
        <div className="testimonial-map-box">
          {testimonialData.map((testimonials) => {
            return (
              <TestimonialItem
                key={testimonials.id}
                testimonials={testimonials}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default TestimonialSection;