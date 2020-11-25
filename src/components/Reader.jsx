import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';
import scanner from './logos/qrcode.svg';

const ScanContener = styled.div`
  background-color: ${({ scan }) =>
    scan ? 'rgba(105,197,178,0.3)' : 'transparent'};
  height: ${({ scan }) => (scan ? '80vh' : '40vh')};
  transition: 0.3s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .CliquerIci {
    display: ${({ scan }) => (scan ? 'block' : 'none')};
  }
`;

const ScanImgStyle = styled.img`
  width: 250px;
  height: 150px;
  display: ${({ scan }) => (scan ? 'inline' : 'none')};
`;

const QrStyle = styled.div`
  display: ${({ reverseScan }) => (reverseScan ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

class Reader extends Component {
  render() {
    const { scan, handleShowScan, handleError, handleScan } = this.props;
    return (
      <ScanContener scan={scan} onClick={handleShowScan}>
        <QrStyle reverseScan={!scan}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '330px' }}
          />
        </QrStyle>
        <p className="CliquerIci">Cliquer ici.</p>
        <ScanImgStyle scan={scan} src={scanner} alt="QR code scanner" />
      </ScanContener>
    );
  }
}

Reader.propTypes = {
  scan: PropTypes.bool.isRequired,
  handleShowScan: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  handleScan: PropTypes.func,
};

export default Reader;
