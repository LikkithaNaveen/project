import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-xl dark:text-sky-900   font-bold text-center">
      {children}
    </h1>
  );
}
