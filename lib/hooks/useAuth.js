import { auth } from 'lib/firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //external code checking firebase user
    onAuthStateChanged(auth, (clientCredential) => {
      if (clientCredential) {
        setUser(clientCredential);
      } else {
        setUser(null);
      }
    });
  });
  return user;
}

export { useAuth };
