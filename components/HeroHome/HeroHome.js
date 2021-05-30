import React from 'react';
import Link from 'next/link';

import { Typography } from '@material-ui/core';
import NextIcon from '@material-ui/icons/NavigateNext';

import Button from '../Button/Button';

export default function HeroHome() {
  return (
    <div className="hero-home-container">
      <div className="content-wrapper">
        <div className="top-wrapper">
          <div className="hero-logo-wrapper">
            <img src="/images/logo-home.png" alt="logo loakarya" />
          </div>
          <ul className="menu-wrapper">
            <li className="hero-menu-item">
              <a href="#">Masuk</a>
            </li>
            <li className="hero-menu-item">
              <a href="#">Daftar</a>
            </li>
          </ul>
        </div>

        <div className="hero-content">
          <Typography align="left" variant="h1" className="hero-title">
            Zero Waste.
          </Typography>
          <Typography align="left" variant="h1" className="hero-title">
            Green Material.
          </Typography>
          <Typography align="left" variant="h1" className="hero-title">
            Sustainable creation for you.
          </Typography>

          <Typography
            align="left"
            variant="subtitle1"
            className="hero-subtitle"
          >
            Kurangi limbah. Kreasikan rumah. Furniture dan dekorasi yang membuat
            indah kediaman anda. Menggunakan material ramah lingkungan dan
            dengan proses yang menyenangkan.
          </Typography>

          <p>Pesan dan bantu selamatkan lingkungan sekarang!</p>
          <div className="hero-button-wrapper">
            <Button
              text="Beli produk"
              classNames="btn-can-hover-green"
              endIcon={<NextIcon />}
              link="https://www.google.com"
            />
            <Button
              text="Kreasikan ruanganmu"
              classNames="btn-can-hover-green"
              endIcon={<NextIcon />}
            />
          </div>
          <a href="#" className="link-hubungi-kami">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
