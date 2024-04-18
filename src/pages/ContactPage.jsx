import React from "react";
import { ContactUs } from "../components/ContactUs";

function ContactPage() {
  return (
    <div className="h-[calc(100vh-40px)]  py-20 px-2 lg:px-24 bg-[url('src/assets/images/wall-bg.jpg')] bg-cover bg-center">
      <div className="mt-12 w-full sm:w-1/2 mx-auto ">
        <ContactUs />
      </div>
    </div>
  );
}

export default ContactPage;
