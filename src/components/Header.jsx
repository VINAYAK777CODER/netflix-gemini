import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  //---------- creating bug-----------------//
  /*const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
       const {uid,email,displayName,photoURL }= user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
      navigate("/error")
    });
  }*/
  //---------------solving---------------------//
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(addUser(null)); // CLEAR THE USER FROM REDUX
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className="z-40 w-full px-8 py-3 absolute bg-gradient-to-b from-black flex items-center justify-between">
      {/* Netflix Logo */}
      <img
        className="w-36"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {/* User Icon & Sign Out Button */}
      {user && user.photoURL && (
        <div className="flex items-center">
          <img
            src={user.photoURL}
            alt="User Icon"
            className="h-10 w-10 rounded-full object-cover mr-4"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
