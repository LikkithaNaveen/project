import React from "react";

export default function FormInput({ name, label, placeholder, ...rest }) {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        className="bg-transparent rounded border-4 dark:border-sky-900 border-sky-900 w-full text-xl outline-none dark:focus:border-sky-800 focus:border-sky-800 p-1 dark:text-sky-900 peer transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="font-bold dark:text-sky-800 text-sky-800 dark:peer-focus:text-sky-800 peer-focus:text-sky-800 transition self-start  "
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
