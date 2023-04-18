import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/db/config/firebase";

type Children = {
  children: ReactNode;
};

export interface loginProps {
  email: string;
  password: string;
}

type User = {};

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("There is no auth provider");
  }
  return context;
};

export function AuthProvider({ children }: Children) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const singUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ singUp, logIn, loginWithGoogle, logout, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
