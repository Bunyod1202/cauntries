
import { useTranslation } from 'react-i18next';
import {Input} from '../ui/input/Input';
import Select from '../ui/select/Select';
import './form.css'

export const Form = ({searchs,selects}) => {
  
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="container">
        <form onSubmit={(e)=> e.preventDefault()}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9  col-xl-10">
              <Input type="search" onKeyDown={(e)=>searchs(e)} placeholder={t("search")}/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-xl-2" >
              <div className="mt-5">
              <Select onChange={(e) => selects(e.target.value)} className="select   ms-0" name="user-country" >
              <option  value="all" >{t("select")}</option>
        <option value="Africa">Africa</option> 
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
              </Select>
            </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
