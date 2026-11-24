import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [sortWord, setSortWord] = useState('difficulty');

  useEffect(() => {
    const savedSettings = localStorage.getItem('todoSettings');
  
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
  
      setItemsPerPage(settings.itemsPerPage);
      setHideCompleted(settings.hideCompleted);
      setSortWord(settings.sortWord);
    }
  }, []);

  const saveSettings = (newSettings) => {
    setItemsPerPage(newSettings.itemsPerPage);
    setHideCompleted(newSettings.hideCompleted);
    setSortWord(newSettings.sortWord);
  
    localStorage.setItem('todoSettings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider
      value={{
        itemsPerPage,
        setItemsPerPage,
        hideCompleted,
        setHideCompleted,
        sortWord,
        setSortWord,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};