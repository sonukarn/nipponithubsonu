import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ContactMap from "./ContactMap";

const ContactComponent = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default ContactComponent;
