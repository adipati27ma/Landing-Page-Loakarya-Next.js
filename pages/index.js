import Head from 'next/head';

import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import { Grid } from '@material-ui/core';
import NextIcon from '@material-ui/icons/NavigateNext';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroHome from '../components/HeroHome/HeroHome';
import CoBussiness from '../components/CoBussiness/CoBussiness';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import ArticleList from '../components/ArticleList/ArticleList';

const numbers = [
  {
    id: 1,
    number: '10.099',
    text: 'produk dikembangkan oleh kami bersama mitra.',
  },
  {
    id: 2,
    number: '10.099',
    text: 'kilogram limbah terkelola dan terkurangi.',
  },
  {
    id: 3,
    number: '10.099',
    text: 'masyarakat terberdayakan dengan program mitra kami.',
  },
  {
    id: 4,
    number: '90%',
    text: 'penghematan energi rata-rata dalam pembuatan produk.',
  },
];

const loakAdvantages = [
  {
    id: 1,
    icon: '/images/icon/web-ramah-lingkungan.svg',
    title: 'Produk ramah lingkungan',
    text: 'produk dikembangkan oleh kami bersama mitra tiap bulan.',
  },
  {
    id: 2,
    icon: '/images/icon/web-kualitas.svg',
    title: 'Kualitas material terjamin',
    text: 'produk dikembangkan oleh kami bersama mitra tiap bulan.',
  },
  {
    id: 3,
    icon: '/images/icon/web-fitur-ekslusif.svg',
    title: 'Fitur esklusif produk',
    text: 'produk dikembangkan oleh kami bersama mitra tiap bulan.',
  },
  {
    id: 4,
    icon: '/images/icon/web-warranty.svg',
    title: 'Garansi dan jaminan produk',
    text: 'produk dikembangkan oleh kami bersama mitra tiap bulan.',
  },
];

export default function Home(props) {
  return (
    <div id="main">
      <Head>
        <title>Loakarya Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          property="og:description"
          content="Produk furnitur ramah lingkungan dan layanan desain interior dengan konsep eco-living. Memenuhi kebutuhan anda dan juga melestarikan lingkungan."
        />
        <meta name="robots" content="index-follow" />
        <link rel="canonical" href="https://loakarya.co" />
        <meta
          property="og:title"
          content="Halaman Depan Situs Resmi Loakarya Indonesia"
        />
        <meta property="og:site_name" content="Loakarya Indonesia" />
        <meta
          property="og:image"
          content="https://resources.loakarya.co/loakarya-og-image.jpg"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://loakarya.co" />
        <meta property="og:type" content="website" />
      </Head>
      <HeaderBar />
      <Header />
      {/* <Header isLoggedIn={isLoggedIn} /> */}
      <main
        id="content"
        className="overflow-x-hidden home-content"
        style={{ paddingTop: 0 }}
      >
        <HeroHome />
        <div className="content">
          <section>
            <CoBussiness />
          </section>

          <section>
            <div className="block-show">
              <img src="/images/Loakarya-png.png" alt="logo loakarya png" />
            </div>
          </section>

          <section className="numbers-section">
            <img
              src="/images/home-assets/peta-indonesia-high-vector.png"
              alt="Peta Indonesia"
            />
            <div className="loakarya-in-numbers section-padding-center">
              <h2 className="home-section-title">Loakarya dalam Angka</h2>
              <p className="home-section-paragraph">
                Sebagai perusahaan yang menyediakan kebutuhan rumah anda.
                Loakarya berusaha agar dapat bermanfaat bagi masyarakat dan
                alam. Dalam tiap proses yang kami jalani, mimpi kami adalah
                memenuhi kebutuhan anda, melestarikan lingkungan, dan
                menyejahterakan sosial.
              </p>
              <Grid
                container
                spacing={7}
                justify="center"
                className="numbers-wrapper"
              >
                {numbers.map((numberItem) => (
                  <Grid
                    key={numberItem.id}
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    className="number-item"
                  >
                    <span>{numberItem.number}</span>
                    <p className="home-section-paragraph">{numberItem.text}</p>
                  </Grid>
                ))}
              </Grid>
            </div>
          </section>

          <section className="why-content-section">
            <img src="/images/home-assets/mjt.png" alt="Meja Lokatable" />
            <div className="why-content section-padding-center">
              <h2 className="home-section-title">Mengapa Loakarya</h2>
              <p className="home-section-paragraph">
                Sebagai perusahaan yang menyediakan kebutuhan rumah anda.
                Loakarya berusaha agar dapat bermanfaat bagi masyarakat dan
                alam. Dalam tiap proses yang kami jalani, mimpi kami adalah
                memenuhi kebutuhan anda, melestarikan lingkungan, dan
                menyejahterakan sosial.
              </p>
              <Grid
                container
                spacing={6}
                justify="center"
                className="advantages-wrapper"
              >
                {loakAdvantages.map((advantagePoint) => (
                  <Grid
                    key={advantagePoint.id}
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    className="advantage-item"
                    justify="flex-start"
                  >
                    <img src={advantagePoint.icon} alt={advantagePoint.title} />
                    <h3 className="advantage-title">{advantagePoint.title}</h3>
                    <p className="home-section-paragraph">
                      {advantagePoint.text}
                    </p>
                  </Grid>
                ))}
              </Grid>
            </div>
          </section>

          <section className="testimoni-slider-section">
            <h2 className="home-section-title">Ragam Kawan Kreasi</h2>
            <TestimonialSlider />
          </section>

          <section className="article-list-section">
            <article className="section-padding-center">
              <h2 className="home-section-title">Artikel Terbaru</h2>
              <ArticleList />
              <Link href="/articles">
                <div className="see-more-articles">
                  <div className="see-more-articles-link">
                    <span>Lihat artikel lainnya</span>
                    <NextIcon />
                  </div>
                </div>
              </Link>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  let profileProducts, profileArticles;

  await axios
    .get('/profile/products')
    .then((response) => {
      if (response.data.status) {
        let respProfileProducts = [];

        response.data.data.map((resp) =>
          respProfileProducts.push({
            productId: resp.product_id,
            thumbnail: resp.product.thumbnail_url,
          })
        );

        profileProducts = respProfileProducts;
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  await axios.get('/article').then((response) => {
    if (response.data.status) {
      let respArticles = [];

      response.data.data.map((resp) =>
        respArticles.push({
          id: resp.id,
          thumbnail:
            'https://dev.api.loakarya.co/storage/article/' + resp.thumbnail_url,
          title: resp.title,
          slug: resp.slug,
          content: resp.content,
        })
      );

      profileArticles = getContentString(respArticles);
    }
  });

  // Pass data to the page via props
  return { props: { profileProducts, profileArticles } };
}

function getContentString(data) {
  const allArticles = [...data];

  for (var i = 0; i < allArticles.length; i++) {
    allArticles[i].content = allArticles[i].content.replace(
      /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
      ' '
    );
  }

  return allArticles;
}
