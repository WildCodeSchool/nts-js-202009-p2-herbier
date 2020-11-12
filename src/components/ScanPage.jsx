import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Scan from './Scan';
import Reader from './Reader';
import Card from './Description';

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ScanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      espece: '',
      famille: '',
      genre: '',
      photo1Id: '',
      scan: true,
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.deleteQrInfos = this.deleteQrInfos.bind(this);
    this.handleShowScan = this.handleShowScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      Axios.get(
        `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_collection-vegetale-nantes&q=&refine.recordid=${data}`
      ).then((res) => {
        this.setState({
          espece: res.data.records[0].fields.espece,
          famille: res.data.records[0].fields.famille,
          genre: res.data.records[0].fields.genre,
          photo1Id: res.data.records[0].fields.photo1.id,
          recordid: res.data.records[0].recordid,
        });
      });
    }
  }

  handleClick(data) {
    if (data && this.state.espece !== '' && !this.props.scannedLybrary.includes(this.state.recordid)) {
      this.setState({
        open: true,
        espece: '',
        famille: '',
        genre: '',
        photo1Id: '',
        scannedLybrary: this.props.scannedLybrary.push(this.state.recordid),
      });
    } else {
      this.setState({
        open: false,
        espece: '',
        famille: '',
        genre: '',
        photo1Id: '',
      });
    }
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  deleteQrInfos() {
    this.setState({
      espece: '',
      famille: '',
      genre: '',
      photo1Id: '',
      scan: true,
    });
  }

  handleShowScan() {
    const { scan } = this.state;
    const toggle = scan;

    this.setState({
      scan: !toggle,
    });
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    const { scan, espece, famille, genre, photo1Id, open } = this.state;
    const { scannedLybrary, vegetals } = this.props;
    return (
      <PageStyle>
        <Scan />
        <Reader
          scan={scan}
          handleShowScan={this.handleShowScan}
          handleScan={this.handleScan}
          handleError={this.handleError}
        />
        <Card
          scan={scan}
          espece={espece}
          famille={famille}
          genre={genre}
          photo1Id={photo1Id}
          handleScan={this.handleScan}
          handleShowScan={this.handleShowScan}
        />
        <Button
          scan={scan}
          espece={espece}
          famille={famille}
          genre={genre}
          photo1Id={photo1Id}
          open={open}
          vegetals={vegetals}
          handleClick={this.handleClick}
          handleClose={this.handleClose}
          handleShowScan={this.handleShowScan}
          deleteQrInfos={this.deleteQrInfos}
          scannedLybrary={scannedLybrary}
        />
      </PageStyle>
    );
  }
}

ScanPage.propTypes = {
  scannedLybrary: PropTypes.arrayOf.isRequired,
  vegetals: PropTypes.arrayOf.isRequired,
};

export default ScanPage;
