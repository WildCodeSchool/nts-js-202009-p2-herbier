import React from 'react';
import './Filters.css';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { all: false, filter: false };
  }

  render() {
    return (
      <div className="Filters">
        <section className="filters">
          <div
            className= {this.state.all ? 'all' : 'someAll'}
            onClick={()=>{
              this.setState({all: !this.state.all });
            }}
          >
            <p>{this.state.all ? 'Toutes' : 'Ma collection'}</p>
            <div className="whiteCircle" />
          </div>
          <button
            type="button"
            className="optionAvancees"
            onClick={() => {
              this.setState({ filter: !this.state.filter });
            }}
          >
            Avancées
          </button>
        </section>
    </div>
    )
}
}

export default Filters;