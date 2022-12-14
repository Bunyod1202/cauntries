import React from 'react';
import Input from '../ui/input/Input';
import Select from '../ui/select/Select';
import './form.css'

const Form = () => {
  return (
    <section className="hero">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9  col-xl-10">
              <Input />
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-xl-2" >
              <Select />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;