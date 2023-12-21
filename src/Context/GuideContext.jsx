import { createContext, useContext, useEffect, useState } from "react";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [guides, setGuides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteGuide = (id) => {
    setGuides(guides.filter((guide) => guide.id !== id));
  };

  const updateGuide = (updatedGuide, id) => {
    setGuides((currentGuides) => {
      return currentGuides.map((guide) => {
        if (guide.id === id) {
          return updatedGuide;
        }
        return guide;
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching guides");
        const response = await fetch("http://localhost:8080/guides");
        const data = await response.json();
        setGuides(data);
        // setting default value for selectedGuide for createSentence and createTranslation
        if (data && data.length > 0) {
          setSelectedGuide(data[0].id);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <GuideContext.Provider
      value={{
        selectedGuide,
        setSelectedGuide,
        guides,
        isLoading,
        deleteGuide,
        updateGuide,
      }}
    >
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
