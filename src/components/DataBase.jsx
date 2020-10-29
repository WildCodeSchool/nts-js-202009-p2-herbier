import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scanned: props.have};
}
  render() {
    return(
      <div className='DataBase'>
        <Vignette className={this.state.scanned? "have":"notHave"} src={this.props.image} alt={this.props.name}/>
      </div>
   );
 }
}

export default DataBase;
