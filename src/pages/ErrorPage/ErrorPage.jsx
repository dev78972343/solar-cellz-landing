import { Link, useRouteError } from "react-router-dom";
import img404 from "@/assets/images/page404.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{ fontFamily: "var(--poppins)" }}
    >
      <div className="px-4 text-center md:w-1/2 md:px-0">
        <h1 className="text-error text-5xl font-bold md:text-6xl">
          {error?.status} ERROR
        </h1>
        <p className="mt-2 font-semibold text-red-700">
          {error?.error?.message}
        </p>
        <img src={img404} alt="" className="mx-auto my-10 block md:w-[77%]" />
        <Link to="/">
          <button className="btn btn-wide btn-outline btn-error mt-8 rounded-none text-white">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
