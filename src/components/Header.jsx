import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO_NETFLIX } from "../utils/constants";

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
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  useEffect(() => {
     const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(addUser(null)); // CLEAR USER ON SIGN OUT
        navigate("/");
      }
    });
    // Unsubscribe when component will unmounts
    return ()=>unsubscribe();
    /*The unsubscribe function comes from the onAuthStateChanged method of Firebase Authentication.
     This method listens for authentication state changes 
    (like login/logout) and returns a function that removes the listener when called.*/
  }, []);
  /*
  --------------------------------------------------------------
  Why Does This Prevent Unauthorized Access?
Scenario 1: User is Not Logged In

If someone directly types http://localhost:5173/browse in the browser without 
logging in, the onAuthStateChanged
 function will detect that the user is null and redirect them to /.

This ensures that only logged-in users can access /browse.



 -----------------------------------------------------------------------------------------
   */

  return (
    <div className="z-40 w-full px-8 py-3 absolute bg-gradient-to-b from-black flex items-center justify-between">
      {/* Netflix Logo */}
      <img
        className="w-36"
        src={LOGO_NETFLIX}
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
