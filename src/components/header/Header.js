import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import Button from '../ui/button/Button';
import { useTranslation } from 'react-i18next';
import "./header.css"
import Select from '../ui/select/Select';

const Header = () => {
  const { darkmode, setDarkmode } = useContext(UserContext)
  const [ themedarks, setThemedarks] = useState("themedark")
  const { t , i18n } = useTranslation();
  const btnTheme = () => {
    setDarkmode(darkmode === "App"?"black":"App")
    setThemedarks(themedarks === "themedark" ? "themelight" : "themedark")
  }
  useEffect(() => {
    localStorage.setItem("theme", darkmode)
  },[darkmode])
  return (
    <header className="header">
    <div className="container">
      <div className="header-inner">  
        <a href="/">
          <span className="title">{t("logo")}</span>
          </a>

          <div className="card-box d-flex align-items-center">
            <div className="selext-box">
              <Select defaultValue={i18n.language} onChange={(e) => {
                localStorage.setItem("lang",e.target.value);
                i18n.changeLanguage(e.target.value)
              }} className="select m-0 p-3">
              <option value="en" >en</option>
              <option value="uz">uz</option> 
              <option value="ru">ru</option>
            </Select></div>  
          <Button className="btn" onClick={btnTheme} >{t(themedarks)}</Button>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;