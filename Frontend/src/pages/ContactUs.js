import ContactDetails from "../components/ContactUs/ContactDetails";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import Breadcrumb from "../components/commonComp/Breadcrumb";

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

      <section className="mx-auto flex flex-col justify-center items-center mt-7 mb-20 w-full lg:p-10 head-div">
        <div className="lg:w-[57%] mx-4">
          <div className="text-richblack-300 flex flex-col ">
            <h2 className="heading text-3xl font-semibold text-center">
              Fill out the form below, and we'll get back to you shortly.
            </h2>
            <div className="mt-7">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>

      <ContactDetails />

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.17719124099!2d77.58668581113459!3d12.914331543311858!2m3!1f0!2f0!3f0!
      3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1504b9c7cf71%3A0x282db70bdaa95a8a!2sFritado%20Technologies%20Private%20
      Limited!5e0!3m2!1sen!2sin!4v1703828458866!5m2!1sen!2sin"
        className="w-full h-[450px]"
      ></iframe> */} 
      

      <Footer />
    </div>
  );
};

export default ContactUs;
