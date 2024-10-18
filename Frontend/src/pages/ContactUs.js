import ContactDetails from "../components/ContactUs/ContactDetails";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import ContactPage from "../components/ContactUs/ContactPage";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb
          title={"Contact Us"}
          para={"Don't hesitate to ask any questions you may have."}
        />
      </div>

      <ContactPage />

      <Footer />
    </div>
  );
};

export default ContactUs;
