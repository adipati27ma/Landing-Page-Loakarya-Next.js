import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Typography, ThemeProvider, createMuiTheme } from '@material-ui/core';
import NextIcon from '@material-ui/icons/NavigateNext';

import Button from '../Button/Button';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default function HeroHome(props) {
  const { setLoginOpen, setRegistOpen } = props;

  return (
    <ThemeProvider theme={theme}>
      <div className="hero-home-container">
        <div className="content-wrapper">
          <div className="top-wrapper">
            <div className="hero-logo-wrapper">
              <img src="/images/logo-home.png" alt="logo loakarya" />
            </div>
            <ul className="menu-wrapper">
              <li className="hero-menu-item">
                <a onClick={() => setLoginOpen(true)}>Masuk</a>
              </li>
              <li className="hero-menu-item spacing-item"></li>
              <li className="hero-menu-item">
                <a onClick={() => setRegistOpen(true)}>Daftar</a>
              </li>
            </ul>
          </div>

          <div className="hero-content">
            <h1 className="hero-title">Zero Waste.</h1>
            <h1 className="hero-title">Green Material.</h1>
            <h1 className="hero-title">Sustainable creation for you.</h1>

            <p className="hero-subtitle">
              Kurangi limbah. Kreasikan rumah. Furniture dan dekorasi yang
              membuat indah kediaman anda. Menggunakan material ramah lingkungan
              dan dengan proses yang menyenangkan.
            </p>

            <p>Pesan dan bantu selamatkan lingkungan sekarang!</p>
            <div className="hero-button-wrapper">
              <Button
                text="Beli produk"
                classNames="btn-can-hover-green"
                endIcon={<NextIcon />}
                link="/products"
              />
              <Button
                text="Kreasikan ruanganmu"
                classNames="btn-can-hover-green"
                endIcon={<NextIcon />}
                link="/services"
              />
            </div>
            <Link href="/contact">
              <a className="link-hubungi-kami">Hubungi Kami</a>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

HeroHome.propTypes = {
  setLoginOpen: PropTypes.func,
  setRegistOpen: PropTypes.func,
};
