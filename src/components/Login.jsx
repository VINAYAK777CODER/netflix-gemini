import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BACKGROUND, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignIn, setSignIn] = useState(true);

  const handleonclick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={LOGIN_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Login Form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 rounded-xl shadow-lg w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {!isSignIn && (
            <input
              type="text"
              ref={name}
              placeholder="Enter Name"
              className="p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-600"
            />
          )}
          <input
            type="email"
            ref={email}
            placeholder="Email Address"
            className="p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-600"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-600"
          />
          <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
          <button
            onClick={handleonclick}
            className="p-3 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Additional Options */}
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-600" />
            <span>Remember Me</span>
          </label>
          <a href="#" className="hover:underline">
            Need Help?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-400">
            {isSignIn ? "New To Netflix ?" : "Click For Sign In"}{" "}
          </span>
          <a
            href="#"
            onClick={toggleForm}
            className="text-white font-semibold hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
