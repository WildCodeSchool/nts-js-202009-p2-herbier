import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ScanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      espece: '',
      famille: '',
      genre: '',
      photo1Id: '',
      scan: true,
      
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
    const { espece, recordid } = this.state;
    const { scannedLybrary, addToLybrary } = this.props;
    if (data && espece !== '' && !scannedLybrary.includes(recordid)) {
      
      this.setState({
        
        espece: '',
        famille: '',
        genre: '',
        photo1Id: '',
      });
      addToLybrary(recordid);
    } else if (data && espece !== '' && scannedLybrary.includes(recordid)) {
      this.setState({
        open: true,
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
    const {
      scan,
      espece,
      famille,
      genre,
      photo1Id,
      open,
      recordid,
    } = this.state;
    const { scannedLybrary } = this.props;
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
          handleClick={this.handleClick}
          handleShowScan={this.handleShowScan}
          deleteQrInfos={this.deleteQrInfos}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={2500}
          onClose={this.handleClose}
        >
          <Alert
            handleClick={this.handleClick}
            onClose={this.handleClose}
            severity={scannedLybrary.includes(recordid) ? 'error' : 'success'}
          >
            {scannedLybrary.includes(recordid)
              ? 'Plante déjà capturée !'
              : 'Plante ajoutée à votre Vegedex !'}
          </Alert>
        </Snackbar>
      </PageStyle>
    );
  }
}

ScanPage.propTypes = {
  scannedLybrary: PropTypes.arrayOf(PropTypes.string).isRequired,
  addToLybrary: PropTypes.func.isRequired,
};

export default ScanPage;
