import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {  signOut } from "firebase/auth";
import "./home.css"
import { getAuth } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [username, setusername] = useState("")
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
  }


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const displayName  = user.displayName;
          setusername(displayName)
          console.log(displayName)
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          setusername("Please Log in")
          console.log("user is logged out")
        }
      });
     
}, [])

  return (
    <div className='area'>
      <h1>Weclome, {username}</h1>
      <div>
        			<button  onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
    </div>
  )
}

export default Home
