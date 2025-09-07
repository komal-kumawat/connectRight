import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (name: string, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Load from localStorage on refresh
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedToken = localStorage.getItem("token");
    if (storedName && storedToken) {
      setUser(storedName);
      setToken(storedToken);
    }
  }, []);

  const login = (name: string, token: string) => {
    localStorage.setItem("name", name);
    localStorage.setItem("token", token);
    setUser(name);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
