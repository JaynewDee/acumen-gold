import { createContext, useContext, useState } from "react";

const Settings = createContext({});

const useSettingsContext = () => {
  const context = useContext(Settings);
  if (context === null) {
    throw new Error(
      `useUtilityContext consumption was attempted outside of provider component`
    );
  }
  return context;
};

const defaultTheme = {
  primaryColor: "black",
  secondaryColor: "white",
  hint: {
    textColor: "white"
  }
};
const lightTheme = {
  primaryColor: "white",
  secondaryColor: "black",
  hint: {
    textColor: "black"
  }
};
const SettingsContextProvider = ({ children }) => {
  const [settings, updateSettings] = useState({
    theme: defaultTheme
  });
  const useDefaultTheme = () => {
    updateSettings({ theme: defaultTheme });
  };
  const useLightTheme = () => {
    updateSettings({ theme: lightTheme });
  };
  return (
    <>
      <Settings.Provider value={{ settings, useLightTheme, useDefaultTheme }}>
        {children}
      </Settings.Provider>
    </>
  );
};

export { useSettingsContext, SettingsContextProvider };
