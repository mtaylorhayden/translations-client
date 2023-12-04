import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TranslationsInput } from "./Translations/TranslationsInput";
import { NavigationBar } from "./Navigation/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Typing } from "./Workbooks/Typing";
import { HomePage } from "./Home/HomePage";
import { Guides } from "./Guides/Guides";
import { Guide } from "./Guides/Guide";

function App() {
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="translations" element={<TranslationsInput />} />
          <Route path="typing" element={<Typing />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guide/:guideId" element={<Guide />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
