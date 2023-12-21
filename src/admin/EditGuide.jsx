import { useParams } from "react-router-dom";
import { useApiGetGuide } from "../Hooks/useApiGetGuide";
import { useGuideContext } from "../Context/GuideContext";
import { useEffect, useState } from "react";

export const EditGuide = () => {
  const { guideId } = useParams();
  const numericGuideId = parseInt(guideId, 10);
  const { selectedGuide, setSelectedGuide, guides } = useGuideContext();
  const [isLoading, setIsLoading] = useState(true);
  console.log("editGuide guides ", guides);
  console.log("editGuide id ", guideId);

  useEffect(() => {
    const guide = guides.find((guide) => guide.id === numericGuideId);
    setSelectedGuide(guide);
    setIsLoading(false);
  }, [guideId, setSelectedGuide]);

  let content = <p>Loading...</p>;

  if (!isLoading && selectedGuide) {
    console.log("selectedGuide ", selectedGuide);
    content = (
      <div>
        <h1>Edit Guide</h1>
        <h1>{selectedGuide.title}</h1>
      </div>
    );
  }

  return <div>{content}</div>;
};
