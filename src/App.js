import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TranslationsInput } from "./Translations/TranslationsInput";
import { NavigationBar } from "./Navigation/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Typing } from "./Workbooks/Typing";
import { HomePage } from "./Home/HomePage";

function App() {
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="translations" element={<TranslationsInput />} />
          <Route path="typing" element={<Typing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
