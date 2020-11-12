import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonDel = styled.button`
  background-color: #69c5b2;
  &:active {
    background-color: #fff;
  }
  border-color: #69c5b2;
  border: none;
  &:active {
    border: solid 2px;
  }
  border-radius: 5px;
  color: white;
  &:active {
    color: #69c5b2;
  }
  font-size: 1rem;
  font-weight: bold;
  margin: 0 2rem;
  min-width: 50px;
  box-shadow: 2px 2px 2px #ccd1d1;
  &:active {
    box-shadow: 0 0 0;
  }
  height: 50px;
  outline: none;
  position: relative;
`;

const ButtonAdd = styled.button`
  background-color: #69c5b2;
  &:active {
    background-color: #fff;
  }
  border-color: #69c5b2;
  border: none;
  &:active {
    border: solid 2px;
  }
  border-radius: 5px;
  color: white;
  &:active {
    color: #69c5b2;
  }
  font-size: 1rem;
  font-weight: bold;
  min-width: 50px;
  box-shadow: 2px 2px 2px #ccd1d1;
  &:active {
    box-shadow: 0 0 0;
  }
  height: 50px;
  outline: none;
  margin-right: 2rem;
`;

const Buttons = styled.div`
  margin-bottom: 2rem;
  height: 100px;
  width: 330px;
  display: ${({ scan }) => (scan ? 'none' : 'flex')};
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Button extends React.Component {
  render() {
    const { scan, deleteQrInfos, handleClick, open, handleClose } = this.props;

    return (
      <Buttons handleShowScan={this.handleShowScan} scan={scan}>
        <ButtonDel type="button" onClick={deleteQrInfos}>
          X
        </ButtonDel>
        <ButtonAdd type="button" onClick={handleClick}>
          Ajouter à mon herbier
        </ButtonAdd>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={2500}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Plante ajoutée à votre Vegedex !
          </Alert>
        </Snackbar>
      </Buttons>
    );
  }
}

Button.propTypes = {
  scan: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  deleteQrInfos: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Button;
