import React from "react";
import Header from "../components/commonComp/Header";
import Footer from "../components/commonComp/Footer";

const TermsAndCondition = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <h1 className="top-heading heading ">Terms and Conditions</h1>
        <div className="tc-div">
          <h2 className="title">1. Introduction</h2>
          <p>
            Welcome to Fritado Technologies. These Terms and Conditions
            ("Terms") govern your use of our Software as a Service (SaaS)
            application. By accessing or using our services, you agree to comply
            with and be bound by these Terms. If you do not agree with these
            Terms, please do not use our services.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">2. Definitions</h2>
          <p>
            "Service": The SaaS application provided by Fritado Technologies.
            <br />
            "User": Any individual or entity using our Service.
            <br />
            "We", "Us", "Our": Fritado Technologies.
            <br />
            "You", "Your": The User of our Service.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">3. Use of Service</h2>
          <h3 className="sub-title">3.1 Eligibility</h3>
          <p>
            You must be at least 18 years old to use our Service. By using our
            Service, you represent and warrant that you meet this requirement.
          </p>

          <h3 className="sub-title">3.2 Account Registration</h3>
          <p>
            To access certain features of our Service, you may be required to
            create an account. You agree to provide accurate and complete
            information during the registration process and to keep your account
            information up to date.
          </p>

          <h3 className="sub-title">3.3 User Responsibilities</h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account login information and for all activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">4. Fees and Payment</h2>
          <h3 className="sub-title">4.1 Subscription Fees</h3>
          <p>
            Access to our Service may require payment of subscription fees. By
            subscribing to our Service, you agree to pay the applicable fees as
            described on our website.
          </p>

          <h3 className="sub-title">4.2 Payment Terms</h3>
          <p>
            All payments are due in advance and are non-refundable. We may
            change our fees at any time, but we will provide notice of any fee
            changes by posting the new fees on our website or by sending you an
            email notification.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">5. Intellectual Property</h2>
          <h3 className="sub-title">5.1 Ownership</h3>
          <p>
            All content, features, and functionality of the Service, including
            but not limited to text, graphics, logos, and software, are the
            exclusive property of Fritado Technologies and are protected by
            intellectual property laws.
          </p>

          <h3 className="sub-title">5.2 License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and
            revocable license to use our Service for your personal or internal
            business purposes, subject to these Terms.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">6. Privacy</h2>
          <p>
            Our Privacy Policy governs the collection, use, and disclosure of
            your personal information. By using our Service, you consent to our
            collection and use of your information as described in the Privacy
            Policy.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">7. Termination</h2>
          <h3 className="sub-title">7.1 Termination by You</h3>
          <p>
            You may terminate your account at any time by contacting us at
            support@fritado.com. Termination of your account does not relieve
            you of any obligations to pay any outstanding fees.
          </p>

          <h3 className="sub-title">7.2 Termination by Us</h3>
          <p>
            We may terminate or suspend your account and access to our Service
            at any time, without prior notice or liability, for any reason,
            including if you breach these Terms.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">8. Disclaimer of Warranties</h2>
          <p>
            Our Service is provided "as is" and "as available" without any
            warranties of any kind, either express or implied. We do not warrant
            that our Service will be uninterrupted, error-free, or free of
            viruses or other harmful components.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Fritado Technologies shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses, resulting from (i) your use or inability
            to use our Service; (ii) any unauthorized access to or use of our
            servers and/or any personal information stored therein; (iii) any
            bugs, viruses, Trojan horses, or the like that may be transmitted to
            or through our Service by any third party.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of India, without regard to its conflict of law provisions. Any
            legal action or proceeding related to your access to or use of the
            Service shall be instituted in a state or federal court in
            Bangalore, India.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days' notice prior to any new terms taking effect. By
            continuing to access or use our Service after any revisions become
            effective, you agree to be bound by the revised terms.
          </p>
        </div>

        <div className="tc-div">
          <h2 className="title">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            support@fritado.com.
          </p>

          <p>
            By using our Service, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndCondition;
