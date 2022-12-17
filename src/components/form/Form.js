
import {Input} from '../ui/input/Input';
import Select from '../ui/select/Select';
import './form.css'

export const Form = ({searchs,selects}) => {
  

  return (
    <section className="hero">
      <div className="container">
        <form onSubmit={(e)=> e.preventDefault()}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9  col-xl-10">
              <Input type="search" onKeyDown={(e)=>searchs(e)} placeholder="Search for a country…"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-xl-2" >
              <Select onChange={(e)=>selects(e.target.value)} className="select" name="user-country" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
