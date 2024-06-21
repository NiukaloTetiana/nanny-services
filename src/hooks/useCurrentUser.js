import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    const detachAuthListener = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsRefreshing(false);
    });
    return () => {
      detachAuthListener();
      setIsRefreshing(true);
    };
  }, []);
    
    return {user, isRefreshing}
};
