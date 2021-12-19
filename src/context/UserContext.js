import React, {useState, createContext, useContext} from 'react';

const Context = createContext();
export const useUser = () => useContext(Context);

const UserContext = ({children}) => {
  const [user, setUser] = useState(false);

  return (
    <Context.Provider value={{user, setUser}}>{children}</Context.Provider>
  );
};

export default UserContext;
