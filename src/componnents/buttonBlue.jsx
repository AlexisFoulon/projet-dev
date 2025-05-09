import React from "react";

export function ButtonBlue({ onClick, texte }) {
  return (
    <button
    onClick={onClick}
    className="bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
  >
      {texte}
    </button>
  );
}