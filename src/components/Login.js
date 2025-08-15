import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute  bg-black p-12 my-20 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-xl">
        <h1 className=" font-bold text-3xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-700  rounded-xl"
          />
        )}

        <input
          type="text"
          placeholder="email Address"
          className="my-4 p-4 w-full bg-gray-700  rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full  bg-gray-700  rounded-xl"
        />
        <button className="p-5 w-full my-4 bg-red-700  rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already registered User ? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
