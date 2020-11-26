import React, { Component, createRef } from 'react';
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
    font-weight: bold;
    font-size: 20px;
    border: none;
    color: black;
    margin: 1rem;
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
  constructor(props) {
    super(props);
    this.state = {
      delay: 500,
      style: { width: '330px' },
    };
    this.qrReaderRef = createRef();
    this.openImageDialog = this.openImageDialog.bind(this);
  }

  openImageDialog() {
    if (this.props.scan === true){
    this.qrReaderRef.current.openImageDialog();
    this.props.handleShowScan();
  }
}

  render() {
    const { scan, handleError, handleScan } = this.props;
    const { delay, style } = this.state;
    return (
      <ScanContener scan={scan} onClick={this.openImageDialog}>
        <QrStyle reverseScan={!scan}>
          <QrReader
            ref={this.qrReaderRef}
            delay={delay}
            onError={handleError}
            onScan={handleScan}
            style={style}
            legacyMode
          />
        </QrStyle>
        <p className='CliquerIci'>Cliquer Ici.</p>
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
