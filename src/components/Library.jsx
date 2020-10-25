import React from 'react';
import './Library.css';
import DataBase from './DataBase';

const Library = ({arbre}) => {
  return (
    <div className="Library">
      <h3>Votre collection : 0 / 15</h3>
      <section className="collection">
        {arbre.map((item) => (
          <DataBase
            itemInfo={item}
            key={item.name}
            image={item.image}
            name={item.name}
            have={item.have}
          />
        ))}
      </section>
    </div>
  );
};

export default Library;
