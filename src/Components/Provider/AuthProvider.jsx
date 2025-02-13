import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // providers
  const googleProvider = new GoogleAuthProvider();

  // google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signIn user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //user tracking
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser:-", currentUser.email);
      return () => {
        return unSubscribe();
      };
    });
  }, []);
  const authInfo = { googleSignIn, createUser, signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
