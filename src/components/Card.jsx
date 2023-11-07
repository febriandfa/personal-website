import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ img, title, language, link }) => {
  return (
    <div className="flex flex-col h-fit gap-2 p-5 border border-black rounded">
      <LazyLoadImage className="rounded h-40 object-cover" src={img} alt="project image" />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <h4 className="text-sm text-gray-500 w-3/4">{language}</h4>
        </div>
        <a className="p-0.5 rounded-full border border-black bg-background" href={link} target="_blank">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
