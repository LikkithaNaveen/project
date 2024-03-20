import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ to, children }) {
  return (
    <Link
      className="dark:text-sky-900 text-sky-900 dark:hover:text-orange-600   hover:text-white  transition  hover:bg-yellow-300 underline  underline-offset-2"
      to={to}
    >
      {children}
    </Link>
  );
}
