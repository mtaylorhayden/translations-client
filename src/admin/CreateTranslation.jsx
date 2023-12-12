// import { useState } from "react";
// import { Input } from "../Components/Input";
// import { useGuideContext } from "../Context/GuideContext";

// export const CreateTranslation = () => {
//   const { guides } = useGuideContext();
//   const [sentence, setSentence] = useState({
//     aSide: "",
//     bSide: "",
//     guideId: null,
//   });

//   const onDropdownSelectHandler = (e) => {
//     setSentence((prevSentence) => ({
//       ...prevSentence,
//       guideId: e.target.value,
//     }));
//   };

//   let titles = [];

//   titles = guides.map((guide) => {
//     return guide.title;
//   });

//   let dropDown = (
//     <select
//       className={styles.selectDropdown}
//       options={titles}
//       onChange={onDropdownSelectHandler}
//     >
//       {titles.map((title, index) => (
//         <option key={index} value={title}>
//           {title}
//         </option>
//       ))}
//     </select>
//   );

//   return (
//     <div>
//       <h2>Create Translation</h2>
//       <Input label="Create Translation" />;
//     </div>
//   );
// };
