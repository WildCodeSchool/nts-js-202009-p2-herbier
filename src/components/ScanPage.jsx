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
    this.deleteInfos = this.deleteInfos.bind(this);
    this.handleShowScan = this.handleShowScan.bind(this);
  }

  deleteInfos() {
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
    console.log('coucou');
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
          handleShowScan={this.state.handleShowScan}
          result={this.state.result}
          handleScan={this.handleScan}
          handleError={this.handleError}
        />
        <Card />
        <Button deleteInfos={this.deleteInfos} />
      </PageStyle>
    );
  }
}

export default ScanPage;
