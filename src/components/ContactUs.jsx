import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm("service_fdlqd72", "template_mh7vwqg", form.current, {
        publicKey: "pGggLZZXgcNCPajyb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setIsSending(false);
          toast.success("Message sent. Thank You!");
          navigate("/");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
          toast.error("Sorry, couldn't sent the message. Try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-[rgba(255,255,255,0.2)]  backdrop-blur-[2px] flex flex-col p-6 shadow-md rounded-md gap-4"
    >
      <div className="flex flex-col gap-2 ">
        <label className="text-slate-800  font-semibold tracking-wider">
          Your name
        </label>
        <input
          type="text"
          name="user_name"
          required
          className="rounded-sm py-1 px-2 "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-slate-800  font-semibold tracking-wider">
          Your email
        </label>
        <input
          type="email"
          name="user_email"
          required
          className="rounded-sm py-1 px-2 "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-slate-800  font-semibold tracking-wider">
          Message
        </label>
        <textarea name="message" required className="rounded-sm py-1 px-2 " />
      </div>

      <input
        type="submit"
        value={isSending ? "Sending..." : "Send"}
        className="bg-sky-600 text-white px-2 py-1 rounded-md mt-2  cursor-pointer shadow-md hover:bg-sky-500 transition duration-300  "
      />
    </form>
  );
};
