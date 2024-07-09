import React from "react";
import Layout from "../layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#ContactMe</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-between mb-5">
          <div className="lg:flex items-center lg:mb-20 mb-5">
            <p className="text-xl text-left mb-3">Contact me via</p>
            <div>
              {/* <a className="flex gap-3 font-bold lg:text-6xl text-5xl ml-3 w-fit border-b-4 border-black" href="https://wa.me/+6289666802021">
                WhatsApp
                <svg className="w-7 h-7 p-0.5 border-2 border-black rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  </g>
                </svg>
              </a>
              <p className="pl-3">+62 896-6680-2021</p> */}
              <a className="flex gap-3 font-bold lg:text-6xl text-5xl ml-3 mt-6 w-fit border-b-4 border-black" href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=febriandaffa123@gmail.com">
                Email
                <svg className="w-7 h-7 p-0.5 border-2 border-black rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  </g>
                </svg>
              </a>
              <p className="pl-3">febriandaffa123@gmail.com</p>
            </div>
          </div>
          <div className="lg:flex items-end">
            <p className="text-xl text-left mb-3">Connect with me on</p>
            <div>
              <a className="flex gap-3 font-bold lg:text-6xl text-5xl ml-3 w-fit border-b-4 border-black" href="https://www.linkedin.com/in/febriandaffa/">
                LinkedIn
                <svg className="w-7 h-7 p-0.5 border-2 border-black rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                  </g>
                </svg>
              </a>
              <p className="pl-3">in/febriandaffa</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-center items-start lg:w-fit w-full justify-self-end">
          <p className="text-xl mb-3">Follow me on</p>
          <a className="flex gap-3 font-bold lg:text-6xl text-5xl ml-3 border-b-4 border-black" href="https://www.instagram.com/_ddffaa/">
            Instagram
            <svg className="w-7 h-7 p-0.5 border-2 border-black rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </a>
          <p className="pl-3">@_ddffaa</p>
          <p className="text-xl my-5">&</p>
          <a className="flex gap-3 font-bold lg:text-6xl text-5xl ml-3 border-b-4 border-black" href="https://github.com/febriandfa">
            Github
            <svg className="w-7 h-7 p-0.5 border-2 border-black rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </a>
          <p className="pl-3">github.com/febriandfa</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
