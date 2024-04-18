import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen grid place-items-center bg-gray-900">
      <div className="flex flex-col gap-8 ">
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl text-gray-100">
          Sorry, there was an error...
        </h1>
        <Link
          to="/"
          className="bg-gray-100 text-gray-900 font-semibold px-2 py-1 text-center rounded-md"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
