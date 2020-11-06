import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  width: 382px;
  height: 214px;
  background-color: red;
`;

const Parks = [
    {name: "Jardin des plantes",
    distance: "0,3 km",
    speciesNumber: "300",
    },
    {name: "Parc des plantes",
    distance: "0,8 km",
    speciesNumber: "(300)",
    }
]

function ParkList() {
  return <List></List>;
}

export default ParkList;
