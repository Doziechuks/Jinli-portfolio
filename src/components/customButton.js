import './customButton.css';

const CustomButton = ({ children,isHomePage, ...otherprops }) => {
  return ( 
    <button className= {`custom-button ${isHomePage ? 'home-animation' : ''}`} { ...otherprops }>{ children }</button>
   );
}
 
export default CustomButton;