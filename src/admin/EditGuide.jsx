import { useParams } from "react-router-dom";
import { useGuideContext } from "../Context/GuideContext";
import { useEffect, useState } from "react";
import { EditGuideForm } from "./EditGuideForm";

export const EditGuide = () => {
  const { guideId } = useParams();
  const numericGuideId = parseInt(guideId, 10);
  const { selectedGuide, setSelectedGuide, guides } = useGuideContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const guide = guides.find((guide) => guide.id === numericGuideId);
    setSelectedGuide(guide);
    setIsLoading(false);
  }, [guideId, setSelectedGuide]);

  let content = <p>Loading...</p>;

  if (!isLoading && selectedGuide) {
    content = <EditGuideForm guide={selectedGuide} />;
  }

  return <div>{content}</div>;
};
