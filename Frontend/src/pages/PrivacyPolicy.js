import React from "react";
import Header from "../components/commonComp/Header";
import Footer from "../components/commonComp/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />

      <div className="container">
      
        <h1 className="top-heading heading">Privacy Policy</h1>
        <h3 className="title">Effective Date: 15th Aug 2024</h3>

        <div  className="tc-div">
          <h2 className="title">1. Introduction</h2>
          <p>
            Welcome to Fritado Technologies! We value your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and share information when you use our
            SAAS-based application ("Service").
          </p>
        </div>

        <div  className="tc-div">
          <h2 className="title">2. Information We Collect</h2>
          <h3 className="sub-title">2.1. Personal Information:</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment information</li>
          </ul>

          <h3  className="sub-title">2.2. Usage Data:</h3>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Clicks and navigation patterns</li>
          </ul>
        </div>

        <div  className="tc-div">
          <h2 className="title">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain our Service</li>
            <li>Process transactions and send related information</li>
            <li>
              Communicate with you, including responding to your requests and
              inquiries
            </li>
            <li>Improve and personalize our Service</li>
            <li>Analyze usage patterns to improve our offerings</li>
            <li>
              Send marketing and promotional communications (you can opt-out at
              any time)
            </li>
          </ul>
        </div>

        <div  className="tc-div">
          <h2 className="title">4. Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who assist us in operating our Service</li>
            <li>Legal authorities if required by law</li>
            <li>
              Third parties in connection with a merger, acquisition, or sale of
              all or a portion of our assets
            </li>
          </ul>
        </div>

        <div  className="tc-div">
          <h2 className="title">5. Data Security</h2>
          <p>
            We implement a variety of security measures to protect your personal
            information. However, no method of transmission over the Internet or
            method of electronic storage is 100% secure.
          </p>
        </div>

        <div  className="tc-div">
          <h2 className="title">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy unless a longer
            retention period is required or permitted by law.
          </p>
        </div>

        <div  className="tc-div">
          <h2 className="title">7. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul>
            <li>Access: You can request access to your personal data.</li>
            <li>
              Correction: You can request to correct inaccurate or incomplete
              data.
            </li>
            <li>Deletion: You can request to delete your personal data.</li>
            <li>
              Objection: You can object to the processing of your personal data.
            </li>
            <li>
              Portability: You can request to transfer your data to another
              service provider.
            </li>
          </ul>
        </div>

        <div  className="tc-div">
          <h2 className="title">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on computers
            located outside of your state, province, country, or other
            governmental jurisdiction where data protection laws may differ.
          </p>
        </div>

        <div  className="tc-div">
          <h2 className="title">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </div>

        <div  className="tc-div">
          <h2 className="title">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            Fritado Technologies
            <br />
            Bangalore, India
            <br />
            Email: support@fritado.com
          </p>
        </div>

        <div  className="tc-div">
          <h2 className="title">11. Governing Law and Jurisdiction</h2>
          <p>
            This Privacy Policy and any disputes related to it shall be governed
            by and construed in accordance with the laws of India. Any legal
            actions or proceedings related to this Privacy Policy shall be
            brought exclusively in the courts located in Bangalore, India.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
