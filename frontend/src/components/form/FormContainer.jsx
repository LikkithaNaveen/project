import React from "react";

export default function FormContainer({ children }) {
  return (
    <div className="fixed inset-0 dark:bg-sky-100 bg-white -z-10 flex justify-center items-center font-bold">
      {children}
    </div>
  );
}
