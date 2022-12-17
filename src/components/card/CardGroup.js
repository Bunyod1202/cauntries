
import Card from './Card';
import './card.css'

export const CardGroup = ({flags}) => {
  return (
    <div className='container'>
      <div className='row margens g-5'>
      {flags.map((card )=> (
        <Card 
          key={card.name.common}
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

