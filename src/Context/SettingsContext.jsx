import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [sortWord, setSortWord] = useState('difficulty');

  return (
    <SettingsContext.Provider
      value={{
        itemsPerPage,
        setItemsPerPage,
        hideCompleted,
        setHideCompleted,
        sortWord,
        setSortWord,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};