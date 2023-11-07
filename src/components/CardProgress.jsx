import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardProgress = ({ img, title, language }) => {
  return (
    <div className="flex flex-col h-fit gap-2 p-5 border border-black rounded">
      <div className="relative w-full h-full">
        <h1 className="absolute z-20 lg:text-3xl text-2xl font-bold w-full h-full flex justify-center items-center">On Progress</h1>
        <LazyLoadImage className="rounded h-40 object-cover w-full blur-sm" src={img} alt="project image" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <h4 className="text-sm text-gray-500 w-3/4">{language}</h4>
        </div>
        <div className="p-0.5 rounded-full border border-black bg-background">
          <svg className="w-5 h-5" fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M320.006 962.032c0 352.866 287.052 639.974 640.026 639.974 173.767 0 334.093-69.757 451.938-188.072l-211.928-211.912h480.019v479.981l-155.046-155.114C1377.649 1674.883 1177.24 1762 960.032 1762 518.814 1762 160 1403.134 160 962.032ZM959.968 162C1401.186 162 1760 520.866 1760 961.968h-160.006c0-352.866-287.052-639.974-640.026-639.974-173.767 0-334.093 69.757-451.938 188.072l211.928 211.912H239.94V241.997L394.985 397.03C542.351 249.117 742.76 162 959.968 162Z"
                fill-rule="evenodd"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardProgress;
