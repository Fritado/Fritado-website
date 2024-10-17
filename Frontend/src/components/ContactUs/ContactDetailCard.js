import React from 'react';
import { IoLocation, IoCall, IoMail } from 'react-icons/io5';

const iconMap = {
  IoLocation: <IoLocation size={22} />,
  IoCall: <IoCall size={22} />,
  IoMail: <IoMail size={22} />
};

const ContactDetailCard = ({ icon, heading, description1, description2, details }) => {

  return (
    <div className="contact-card">
    <div className="icon">{iconMap[icon]}</div>
    <div className="content">
      <h3>{heading}</h3>
      <p>{description1}</p>
      {description2 && <p>{description2}</p>}
      {details && <p>{details}</p>}
    </div>
  </div>
  )
}

export default ContactDetailCard
