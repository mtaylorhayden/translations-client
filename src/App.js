import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./Navigation/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Typing } from "./Workbooks/Typing";
import { HomePage } from "./Home/HomePage";
import { Guides } from "./Guides/Guides";
import { Guide } from "./Guides/Guide";
import { Footer } from "./Components/Footer";
import { AdminHome } from "./admin/AdminHome";
import { CreateGuideForm } from "./admin/Create/CreateGuideForm";
import { EditGuide } from "./admin/Edit/EditGuide";
import { SignIn } from "./Auth/SignIn";
import { Register } from "./Auth/Register";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="typing" element={<Typing />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guide/:guideId" element={<Guide />} />
          <Route path="admin" element={<AdminHome />} />
          <Route
            path="admin/Create/createGuideForm"
            element={<CreateGuideForm />}
          />
          <Route path="admin/editGuide/:guideId" element={<EditGuide />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
