import React from 'react';
import { Typography } from '@material-ui/core';

export default function HeroHome() {
  return (
    <div className="hero-home-container">
      <div className="top-wrapper">
        <Link href="/">
          <img src="/images/logo-home.png" alt="logo loakarya" />
        </Link>
      </div>
      <Typography align="center" variant="h1" className="header-title">
        Zero Waste.
      </Typography>
    </div>
  );
}
