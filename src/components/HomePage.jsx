import React from 'react';
import MainButton from './MainButton';
import './logos/qrcode.svg';
import './logos/main-herbier.svg';
import './logos/main-decouverte.svg';
import SideBars from './SideBars';

function HomePage() {
  return (
    <div className="HomePage">
      <MainButton />
      <SideBars />
    </div>
  );
}

export default HomePage;
