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
  const navigate = useNavigate();
  const showGptsearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(addUser(null)); // CLEAR THE USER FROM REDUX
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
        dispatch(addUser(null)); // CLEAR USER ON SIGN OUT
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="z-40 w-full px-4 sm:px-8 py-3 absolute bg-gradient-to-b from-black flex items-center justify-between flex-wrap">
      {/* Netflix Logo */}
      <img
        className="w-24 sm:w-36 md:w-44 lg:w-52"
        src={LOGO_NETFLIX}
        alt="Netflix Logo"
      />

      {/* User Icon & Sign Out Button */}
      {user && user.photoURL && (
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          {showGptsearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            onClick={handleGptSearchClick}
            className="text-emerald-500 border border-emerald-500 hover:bg-emerald-600 text-white text-opacity-70 bg-clip-text backdrop-blur-sm px-3 py-1 rounded-md font-semibold hover:scale-110 transition duration-300 sm:px-2 sm:py-1"
          >
            {!showGptsearch ? "GPTsearch" : "HomePage"}
          </button>

          {/* User Icon */}
          <img
            src={user.photoURL}
            alt="User Icon"
            className="h-10 w-10 rounded-full object-cover"
          />

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="text-red-600 border border-red-600 hover:bg-red-700 text-white text-opacity-70 bg-clip-text backdrop-blur-sm px-3 py-1 rounded-md font-semibold hover:scale-110 transition duration-300 sm:px-2 sm:py-1"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
