
import Card from './Card';
import './card.css'

const CardGroup = ({flags}) => {
  console.log(flags)
  return (
    <div className='container'>
      <div className='row margens g-5'>
      {flags.map((card )=> (
        <Card 
          img={card.flags.png} 
          name={card.name.common} 
          population={card.population}
          region={card.region}
          capital={card.capital?.[0]} 
        />
      )) }
    </div>
    </div>
  );
};

export default CardGroup;