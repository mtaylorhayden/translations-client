import { createContext, useContext, useEffect, useState } from "react";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {
  // State to hold the selected guide
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [guides, setGuides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/guides");
        const data = await response.json();
        setGuides(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  return (
    // Provide the context value with the state and updater function
    <GuideContext.Provider value={{ selectedGuide, setSelectedGuide, guides }}>
      {children}
    </GuideContext.Provider>
  );
};

export const useGuideContext = () => {
  const context = useContext(GuideContext);
  if (!context) {
    throw new Error("useGuideContext must be used within a GuideProvider");
  }
  return context;
};
