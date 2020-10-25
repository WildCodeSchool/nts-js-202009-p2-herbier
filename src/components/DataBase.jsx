import React from 'react';

class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filtered : props.have };
}
  render() {
    return(
    <div className='DataBase'>
      <img  className={this.state.filtered?"have":"notHave"} src={this.props.image} alt={this.props.name}/>
     </div>
   );
 }
}

export default DataBase;