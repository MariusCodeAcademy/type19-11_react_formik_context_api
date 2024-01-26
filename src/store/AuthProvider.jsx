import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  isUserLoggedIn: false,
  logout() {},
  login(token, email) {},
});

AuthContext.displayName = 'MusuAuthCtx';

export default function AuthProvider({ children }) {
  const tokenFromStorage = localStorage.getItem('userToken');
  const [token, setToken] = useState(tokenFromStorage || '');
  const [email, setEmail] = useState('');

  function handleLogin(gotToken) {
    console.log('gotToken ===', gotToken);
    setToken(gotToken);
    localStorage.setItem('userToken', gotToken);
  }

  function handleLogout() {
    setToken('');
    localStorage.removeItem('userToken');
  }

  const isUserLoggedIn = Boolean(token);
  console.log('isUserLoggedIn ===', isUserLoggedIn);

  const ctxValue = {
    isUserLoggedIn: isUserLoggedIn,
    logout: handleLogout,
  };
  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
}

// custom hook

export function useAuthCtx() {
  // const ctx = useContext(AuthContext);
  // return ctx;
  return useContext(AuthContext);
}
