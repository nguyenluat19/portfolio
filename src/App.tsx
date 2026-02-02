import React from 'react';
import { FontLoader } from './components/FontLoader';
import { DigitalMarketingPortfolio } from './pages/DigitalMarketingPortfolio';
export function App() {
  return <div className="w-full min-h-full">
      <FontLoader />
      <DigitalMarketingPortfolio />
    </div>;
}