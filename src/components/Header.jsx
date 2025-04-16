import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO_NETFLIX, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptsearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(addUser(null)); // Clear the user from Redux
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(addUser(null)); // Clear user on sign out
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔥 If not logged in, don’t show header
  if (!user || !user.photoURL) return null;

  return (
    <div className="z-40 w-full px-4 sm:px-8 py-3 absolute bg-gradient-to-b from-black">
      {/* ✅ GPT Search Mode - Centered layout */}
      {showGptsearch ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            className="w-24 sm:w-36 md:w-44 lg:w-52"
            src={LOGO_NETFLIX}
            alt="Netflix Logo"
          />

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <select
              className="p-1 sm:p-2 bg-gray-900 text-white text-sm sm:text-base rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleGptSearchClick}
              className="text-emerald-500 border-2 border-transparent hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500 hover:ring-opacity-50 text-white text-opacity-70 bg-clip-text backdrop-blur-sm px-3 py-1 text-sm rounded-md font-medium hover:scale-105 transition duration-300 sm:text-base sm:font-semibold"
            >
              HomePage
            </button>

            <img
              src={user.photoURL}
              alt="User Icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
            />

            <button
              onClick={handleSignOut}
              className="text-red-600 border-2 border-transparent hover:border-red-600 hover:ring-2 hover:ring-red-600 hover:ring-opacity-50 text-white text-opacity-70 bg-clip-text backdrop-blur-sm px-3 py-1 text-sm rounded-md font-medium hover:scale-105 transition duration-300 sm:text-base sm:font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        // ✅ Home Page Mode - Logo on left, buttons on right
        <div className="flex items-center justify-between flex-wrap">
          {/* Left: Logo */}
          <img
            className="w-24 sm:w-36 md:w-44 lg:w-52"
            src={LOGO_NETFLIX}
            alt="Netflix Logo"
          />

          {/* Right: Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-0">
            <button
              onClick={handleGptSearchClick}
              className="text-emerald-500 border-2 border-transparent hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500 hover:ring-opacity-50 text-white text-opacity-70 bg-clip-text backdrop-blur-sm px-3 py-1 text-sm rounded-md font-medium hover:scale-105 transition duration-300 sm:text-base sm:font-semibold"
            >
               AI-Search
            </button>

            <img
              src={user.photoURL}
              alt="User Icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
            />

            <button
              onClick={handleSignOut}
              className="text-red-600 border-2 border-transparent hover:border-red-600 hover:ring-2 hover:ring-red-600 hover:ring-opacity-50 text-white text-opacity-70 bg-clip-text backdrop-blur-sm px-3 py-1 text-sm rounded-md font-medium hover:scale-105 transition duration-300 sm:text-base sm:font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
