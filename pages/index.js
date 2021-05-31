import Head from 'next/head';

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroHome from '../components/HeroHome/HeroHome';
import CoBussiness from '../components/CoBussiness/CoBussiness';

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
          <section className="section-padding">
            <div className="loakarya-in-numbers">
              <h2>Loakarya dalam Angka</h2>
              <p>
                Sebagai perusahaan yang menyediakan kebutuhan rumah anda.
                Loakarya berusaha agar dapat bermanfaat bagi masyarakat dan
                alam. Dalam tiap proses yang kami jalani, mimpi kami adalah
                memenuhi kebutuhan anda, melestarikan lingkungan, dan
                menyejahterakan sosial.
              </p>
              <Grid container spacing={10} className="numbers-wrapper">
                <Grid item className="number-item">
                  <span>10.099</span>
                  <p>produk dikembangkan oleh kami bersama mitra.</p>
                </Grid>
                <Grid item className="number-item">
                  <span>10.099</span>
                  <p>produk dikembangkan oleh kami bersama mitra.</p>
                </Grid>
              </Grid>
            </div>
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
