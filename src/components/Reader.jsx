import React, { Component } from 'react';
import styled from 'styled-components';
import scanner from './logos/qrcode.svg';
import QrReader from 'react-qr-reader';

const ScanContener = styled.div`
  background-color: #abb2b9;
  height: ${({ scan }) => (scan ? '500px' : '300px')};
  transition: 0.3s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }

  render() {
    return (

      
      <ScanContener scan={this.props.scan} onClick={this.props.handleShowScan}>
        <button type="button" onClick={this.props.handleShowScan}>bouton</button>
        <QrStyle reverseScan={!this.props.scan}>
          <QrReader
            delay={300}
            onError={this.props.handleError}
            onScan={this.props.handleScan}
            style={{ width: '200px' }}
          />
          <p>{this.props.result}</p>
        </QrStyle>
        <ScanImgStyle
          scan={this.props.scan}
          src={scanner}
          alt="QR code scanner"
        />
      </ScanContener>
    );
  }
}

export default Reader;
