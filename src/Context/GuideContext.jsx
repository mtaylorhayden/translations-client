import { createContext, useContext, useState } from "react";

const GuideContext = createContext();

// Create a provider component that will wrap your app and manage the state
export const GuideProvider = ({ children }) => {
  // State to hold the selected guide
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    // Provide the context value with the state and updater function
    <GuideContext.Provider value={{ selectedGuide, setSelectedGuide }}>
      {/* Render the child components */}
      {children}
    </GuideContext.Provider>
  );
};

export const useGuideContext = () => useContext(GuideContext);
