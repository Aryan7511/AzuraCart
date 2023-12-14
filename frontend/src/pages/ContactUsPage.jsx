import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ContactUsPhoto from "../Assests/Service 24_7-pana 1.svg";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header activeHeading={6} />
      <ContactForm />
      <Footer />
    </div>
  );
};


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className="max-w-5xl mx-auto mt-10 flex items-end mb-6">
      <div className="flex flex-col gap-6">
        <div className="flex gap-8">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit} className="flex flex-col gap-5 pb-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="h-10 px-3 border border-gray-700 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="h-10 px-3 border border-gray-700 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="text-sm font-semibold">
              Text
            </label>
            <textarea
              name="text"
              rows="8"
              className="p-2 border border-gray-700 rounded"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className="ml-8">
        <img
          src={ContactUsPhoto}
          alt="Contact Us 24/7"
          className="max-w-none"
        />
      </div>
    </section>
  );
};

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        isOutline
          ? "border border-black text-black bg-white"
          : "bg-black text-white"
      } p-4 rounded flex items-center gap-2 min-w-[220px] text-base justify-center cursor-pointer`}
    >
      {icon}
      {text}
    </button>
  );
};

export default ContactUsPage;
