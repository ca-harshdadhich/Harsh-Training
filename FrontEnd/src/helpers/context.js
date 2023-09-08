import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [showNavContent, setShowNavContent] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuSelected, setMenuSelected] = useState('');
  const [previousState, setPreviousState] = useState(null);
  const [myState, setMyState] = useState('');

  return (
    <MyContext.Provider
      value={{
        expanded,
        setExpanded,
        showNavContent,
        setShowNavContent,
        menu,
        setMenu,
        menuSelected,
        setMenuSelected,
        previousState,
        setPreviousState,
        myState,
        setMyState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
