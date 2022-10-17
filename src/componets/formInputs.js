import './formInput.css';

export const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="form-input-wrapper">
      <label className="contact-label">{label}</label>
      <input className='contact-input' onChange={handleChange} {...otherProps} />
    </div>
  );
}

export const FormTextArea = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="form-input-wrapper">
      <label className="contact-label">{label}</label>
      <textarea
        className="contact-textArea"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};
