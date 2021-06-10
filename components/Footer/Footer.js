import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import './Footer.css';

import Grid from '@material-ui/core/Grid';
import NextIcon from '@material-ui/icons/NavigateNext';

import Button from '../Button/Button';

const Footer = ({ homeFooter, setRegistOpen }) => {
  if (homeFooter) {
    return (
      <footer>
        <div className="mari-berkreasi-container">
          <div className="mari-berkreasi">
            <h2>Mari berkreasi untuk bumi</h2>
            <p>Bergabunglah bersama kami menjadi kawan kreasi</p>
            <Button
              text="Daftar"
              endIcon={<NextIcon />}
              classNames="btn-can-hover-green"
              onClick={() => setRegistOpen(true)}
            />
          </div>
        </div>

        <div className="footer-wrapper">
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} md={4}>
              <div className="footer-side footer-side--one ">
                <div className="footer-title">
                  <img src="/images/LogoLoakPutih.svg" alt="Loakarya's Logo" />
                </div>
                <p>
                  Solusi mudah dan menyenangkan untuk mengelola limbah anorganik
                  dengan metode <i>upcycling</i> dan <i>recycling</i> juga
                  mengedepankan konsep
                  <i>eco smart-living</i>.
                </p>
                <br />
                <p>
                  Alamat:&nbsp; Jalan Raya Soreang - Banjaran No. 223 RT05/RW01
                  Ds. Ciluncat, Kec. Cangkuang, Kab. Bandung, 40377
                </p>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className="footer-side footer-side--two ">
                <ul className="text--center">
                  <div className="col-12">
                    <div className="menu-wrapper">
                      <li>
                        <Link href="/products">Produk</Link>
                      </li>
                      <li>
                        <Link href="/services">Layanan</Link>
                      </li>
                      <li>
                        <Link href="/articles">Artikel</Link>
                      </li>
                      <li>
                        <Link href="/about">Tentang</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Hubungi Kami</Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className="footer-side footer-side--three">
                <div className="side-three-container">
                  <div className="footer-title">
                    #Kreasi
                    <br />
                    UntukBumi
                  </div>
                  <div className="footer-contact-container">
                    <a href="https://api.whatsapp.com/send?phone=6285759332633">
                      <img
                        className="contact-icon"
                        src="/images/social-media/wa.svg"
                        alt="WhatsApp's Icon"
                      />
                    </a>
                    <a href="https://www.facebook.com/Loakarya.co/">
                      <img
                        className="contact-icon"
                        src="/images/social-media/facebook.svg"
                        alt="Facebook's Icon"
                      />
                    </a>
                    <a href="https://www.instagram.com/loakarya/">
                      <img
                        className="contact-icon"
                        src="/images/social-media/instagram.svg"
                        alt="Instagram's Icon"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/53214780/">
                      <img
                        className="contact-icon"
                        src="/images/social-media/linkedin.svg"
                        alt="LinkdIn's Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <p className="text--center mb-4">Loakarya Indonesia &copy; 2021</p>
      </footer>
    );
  }

  return (
    <footer>
      <div className="footer-wrapper">
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} md={4}>
            <div className="footer-side footer-side--one ">
              <div className="footer-title">
                <img src="/images/LogoLoakPutih.svg" alt="Loakarya's Logo" />
              </div>
              <p>
                Solusi mudah dan menyenangkan untuk mengelola limbah anorganik
                dengan metode <i>upcycling</i> dan <i>recycling</i> juga
                mengedepankan konsep
                <i>eco smart-living</i>.
              </p>
              <br />
              <p>
                Alamat:&nbsp; Jalan Raya Soreang - Banjaran No. 223 RT05/RW01
                Ds. Ciluncat, Kec. Cangkuang, Kab. Bandung, 40377
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="footer-side footer-side--two ">
              <ul className="text--center">
                <div className="col-12">
                  <div className="menu-wrapper">
                    <li>
                      <Link href="/products">Produk</Link>
                    </li>
                    <li>
                      <Link href="/services">Layanan</Link>
                    </li>
                    <li>
                      <Link href="/articles">Artikel</Link>
                    </li>
                    <li>
                      <Link href="/about">Tentang</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="/contact">Hubungi Kami</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="footer-side footer-side--three">
              <div className="side-three-container">
                <div className="footer-title">
                  #Kreasi
                  <br />
                  UntukBumi
                </div>
                <div className="footer-contact-container">
                  <a href="https://api.whatsapp.com/send?phone=6285759332633">
                    <img
                      className="contact-icon"
                      src="/images/social-media/wa.svg"
                      alt="WhatsApp's Icon"
                    />
                  </a>
                  <a href="https://www.facebook.com/Loakarya.co/">
                    <img
                      className="contact-icon"
                      src="/images/social-media/facebook.svg"
                      alt="Facebook's Icon"
                    />
                  </a>
                  <a href="https://www.instagram.com/loakarya/">
                    <img
                      className="contact-icon"
                      src="/images/social-media/instagram.svg"
                      alt="Instagram's Icon"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/53214780/">
                    <img
                      className="contact-icon"
                      src="/images/social-media/linkedin.svg"
                      alt="LinkdIn's Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <p className="text--center mb-4">Loakarya Indonesia &copy; 2021</p>
    </footer>
  );
};
export default Footer;

Footer.propTypes = {
  homeFooter: PropTypes.bool,
  setRegistOpen: PropTypes.func,
};
