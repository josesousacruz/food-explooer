import { createContext,useContext,useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(true); // Defina o falor como true para paginas de adm
  
    return (
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        {children}
      </AdminContext.Provider>
    );
  };

  export const useAdmin = () => {
    return useContext(AdminContext);
  };