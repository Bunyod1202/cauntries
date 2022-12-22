
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { UserContext } from "./context/userContext";
import "./main.css"
import { CardId } from "./pages/CardId";
import { Errors } from "./pages/Error";
import { Home } from "./pages/Home";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {lang} from "./lang/lang"
function App() {
  const {darkmode } = useContext(UserContext)
  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang")||"en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation:  lang.en},
      uz: { translation:  lang.uz},
      ru: { translation:  lang.ru}
    }
  });
  return (
    <div className={darkmode}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardId/>} />
        <Route path="/*" element={<Errors/>} />

      </Routes>
    </div>
  );
}

export default App;
