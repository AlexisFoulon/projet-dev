import React from "react";

export const Card = ({ imgSrc, title, description,}) => {
  console.log({ imgSrc, title, description})
    return (
      <div className="w-[400px] h-[350px] mb-20 bg-zinc-50 p-8 flex justify-center items-center text-center flex-col border border-gray-300 rounded-md hover:bg-zinc-200 hover:shadow-lg">
        <img className="w-10 h-10 mb-12" src={imgSrc} alt={title} />
        <h4 className="mb-2 text-2xl font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    );
  };