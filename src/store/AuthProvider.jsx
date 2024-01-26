import { createContext } from 'react';

const AuthContext = createContext({
  isUserLoggedIn: false,
  logout() {},
  login(token, email) {},
});

AuthContext.displayName = 'MusuAuthCtx';

export default function AuthProvider({ children }) {
  const ctxValue = {
    isUserLoggedIn: false,
    logout: () => {},
  };
  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
}
