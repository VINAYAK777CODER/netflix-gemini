import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';



const Body = () => {
  const dispatch=useDispatch();
  const appRouter=createBrowserRouter(
    [
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/browse",
        element:<Browse/>,
      }
    ]
  ) 
  // its------------------- bug-------------------------//
  /*useEffect(
    ()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,email,displayName,photoURL }= user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})); // hook name as useDispatch
          
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    },[]);*/
    //-----------------------solving the bug---------------------//
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        } else {
          dispatch(addUser(null)); // CLEAR USER ON SIGN OUT
        }
      });
    }, [dispatch]);
    


  return (
    <div>
      
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body