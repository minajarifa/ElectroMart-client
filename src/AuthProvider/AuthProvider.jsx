/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.gonfig";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const axiosURL = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signin user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // update photo , user name
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // google login
  const googleSigning = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   user controler

  useEffect(() => {
    const unsunscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     
      console.log("current User", currentUser);
      if (currentUser) {
        //get token and store client
        const userInfo = { email: currentUser.email };
        axiosURL.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
             setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
         setLoading(false);
      }
    });
    return () => {
      return () => unsunscribe();
    };
  }, [axiosURL]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    updateUserProfile,
    googleSigning,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
