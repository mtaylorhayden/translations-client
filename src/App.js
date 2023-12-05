import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TranslationsInput } from "./Translations/TranslationsInput";
import { NavigationBar } from "./Components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Typing } from "./Workbooks/Typing";
import { HomePage } from "./Home/HomePage";
import { Guides } from "./Guides/Guides";
import { Guide } from "./Guides/Guide";
import { Footer } from "./Components/Footer";
import { GuideProvider } from "./Context/GuideContext";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="main">
        <GuideProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="translations" element={<TranslationsInput />} />
            <Route path="typing" element={<Typing />} />
            <Route path="guides" element={<Guides />} />
            <Route path="guide/:guideId" element={<Guide />} />
          </Routes>
        </GuideProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
