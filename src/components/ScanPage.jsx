import React from 'react';
import Button from './Button';

import Scan from './Scan';
import Reader from './Reader';
import styled from 'styled-components';
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
      result: 'no result',
      scan: true,
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.deleteQrInfos = this.deleteQrInfos.bind(this);
    this.handleShowScan = this.handleShowScan.bind(this);
  }

  deleteQrInfos() {
    this.setState({
      result: 'no result',
      scan: true,
    });
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      });
    }
  }

  handleShowScan() {
    const toggle = this.state.scan;
    this.setState({
      scan: !toggle,
    });
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <PageStyle>
        <Scan />
        <Reader
          scan={this.state.scan}
          handleShowScan={this.handleShowScan}
          result={this.state.result}
          handleScan={this.handleScan}
          handleError={this.handleError}
        />
        <Card scan={this.state.scan} handleShowScan={this.handleShowScan}/>
        <Button
          scan={this.state.scan}
          handleShowScan={this.handleShowScan}
          deleteQrInfos={this.deleteQrInfos}
        />
      </PageStyle>
    );
  }
}

export default ScanPage;
