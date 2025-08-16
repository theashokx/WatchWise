import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_URL, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "name.current.value",
            photoURL: PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              // ...

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMsg("Sorry User not Found");
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("User Not Found");
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={BACKGROUND_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute  bg-black p-12 my-20 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-xl"
      >
        <h1 className=" font-bold text-3xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-700  rounded-xl"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="email Address"
          className="my-4 p-4 w-full bg-gray-700  rounded-xl"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full  bg-gray-700  rounded-xl"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
        <button
          className="p-5 w-full my-4 bg-red-700  rounded-xl "
          onClick={handleButtonClick}
        >
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
