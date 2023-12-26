import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {
  const { authToken } = useAuthContext();
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [guides, setGuides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteGuide = (id) => {
    setGuides(guides.filter((guide) => guide.id !== id));
  };

  const addGuide = (newGuide) => {
    setGuides([...guides, newGuide]);
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

  // how can we use our authToken to authorize the user to make the request?
  // i think we should set authToken as a dependency because we only want to load this when the user logs in
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching guides");
        if (authToken) {
          const response = await fetch("http://localhost:8080/guides", {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          const data = await response.json();
          setGuides(data);
          // setting default value for selectedGuide for createSentence and createTranslation
          if (data && data.length > 0) {
            setSelectedGuide(data[0].id);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, [authToken]);

  return (
    <GuideContext.Provider
      value={{
        selectedGuide,
        setSelectedGuide,
        guides,
        isLoading,
        deleteGuide,
        updateGuide,
        addGuide,
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
