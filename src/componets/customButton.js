import './customButton.css';

const CustomButton = ({ children, isHomePage, isSubmit, ...otherprops }) => {
  return ( 
    <button className= {`custom-button ${isHomePage ? 'home-animation' : ''} ${isSubmit ? 'submit' : ''}`} { ...otherprops }>{ children }</button>
   );
}
 
export default CustomButton;