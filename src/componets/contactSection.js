import { useState } from 'react';
import './contactSection.css';
import { FormInput } from './formInputs';
import { FormTextArea } from './formInputs';
import CustomButton from './customButton';

const ContactSection = ({ contatcPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setFullName("");
    setMessage("");
    setSubject("");
    alert("Thank you for reaching us");
  };
  const handleName = (e) => {
    setFullName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleSubject = (e) => {
    setSubject(e.target.value);
  }
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }
  return (
    <div className="contact-section-wrapper">
      <div className={`contact-title ${ contatcPage ? 'hide-title' : '' }`}>
        <h1>get in touch</h1>
        <div className="contact-underline" />
      </div>
      <div className="form-contact-wrapper">
        <div className="address-wrapper">
          <div className="address">
            <h3>address:</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="contact-phone-email">
            <div>
              <h3>phone:</h3>
              <p>1234-567-1209</p>
            </div>
            <div>
              <h3>email:</h3> 
              <p>lorem@info.com</p>
            </div>
          </div>
          <div className="office-hour">
            <div className="address">
              <h3>opening hours:</h3>
              <p>8am - 5pm</p>
              <p>monday - saturday</p>
            </div>
          </div>
        </div>
        <form className="section-form" onSubmit={handleSubmit}>
          <div className="name-email">
            <FormInput placeholder="Full Name" value={fullName} required handleChange={handleName}/>
            <FormInput placeholder="Email" value={email} required handleChange={handleEmail}/>
          </div>
          <FormInput placeholder="Subject" value={subject} required handleChange={handleSubject}/>
          <FormTextArea placeholder="Message" value={message} required handleChange={handleMessage}/>
          <CustomButton isSubmit >submit</CustomButton>
        </form>
      </div>
    </div>
  );
}
 
export default ContactSection;