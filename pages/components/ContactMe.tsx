import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs.sendForm('service_gpos6wl', 'template_cy46xiv', form.current, 'kJH7v5q85kqI7DUbD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section>
  <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
    <h1 className="absolute content-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      Contact
    </h1>
    <div className="flex justify-center content-center items-center flex-col flex-wrap p-5 m-5 overflow-hidden">
      <form onSubmit={sendEmail} className="w-full max-w-md">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="user_name"
          placeholder="Enter your name"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="user_email"
          placeholder="Enter your email"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          placeholder="Enter your message"
        ></textarea>
        <input
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  </div>
</section>

  )
}