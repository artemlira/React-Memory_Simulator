import { useState, useEffect } from 'react';


export default function useAuth(authFirebase) {
  const [aythentification, setAythentification] = useState(null);

  const auth = authFirebase();

  const provider = new authFirebase.GoogleAuthProvider();
  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () => auth.signOut();

  useEffect(() => {

    auth.onAuthStateChanged(user => {
      if (user) {
        setAythentification(user);
      } else {
        setAythentification(null);
      }
    });

  }, [aythentification]);

  return { aythentification, logIn, logOut }
}