import './contactPage.css';
import ContatcPageItems from '../componets/contentPageItems';
import ContactSection from '../componets/contactSection';
import ComplimentSection from '../componets/complimentSection';
import FooterSection from "../componets/footer";

const ContactPage = () => {
  return ( 
    <div className="contact-page-wrapper">
      <ContatcPageItems />
      <ContactSection contatcPage />
      <ComplimentSection />
      <FooterSection />
    </div>
   );
}
 
export default ContactPage;