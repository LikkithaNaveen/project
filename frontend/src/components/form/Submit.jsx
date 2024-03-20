import React from "react";
import { ImSpinner3 } from "react-icons/im";

export default function Submit({ value, busy }) {
  return (
    <button
      type="submit"
      className="w-full rounded dark:bg-sky-900 bg-sky-900 dark:text-white text-white hover:bg-opacity-90 transition font-bold 
      text-lg cursor-pointer h-10 flex items-center justify-center"
    >
      {busy ? <ImSpinner3 className="animate-spin" /> : value}
    </button>
  );
}
