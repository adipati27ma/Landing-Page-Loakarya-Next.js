import React from 'react';
import { Grid } from '@material-ui/core';

export default function ArticleList() {
  return (
    <Grid
      container
      justify="center"
      spacing={8}
      className="article-list-container"
    >
      <Grid item xs={12} sm={6} md={4} className="article-list-item">
        <img
          src="/images/slider1.jpg"
          alt=""
          title=""
          className="article-image"
        />
        <div className="article-content">
          <span className="category">Recycle</span>
          <h3 className="article-title">Barang yang Mudah Didaur Ulang</h3>
          <p className="article-text">
            Menumpuknya limbah rumah tangga adalah permasalahan serius. Limbah
            rumah tangga adalah salah satu…..
          </p>
          <p className="writer-and-time">
            Oleh <span>Akhyar</span> - 19 Juli 2020
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className="article-list-item">
        <img
          src="/images/slider1.jpg"
          alt=""
          title=""
          className="article-image"
        />
        <div className="article-content">
          <span className="category">Recycle</span>
          <h3 className="article-title">Barang yang Mudah Didaur Ulang</h3>
          <p className="article-text">
            Menumpuknya limbah rumah tangga adalah permasalahan serius. Limbah
            rumah tangga adalah salah satu…..
          </p>
          <p className="writer-and-time">
            Oleh <span>Akhyar</span> - 19 Juli 2020
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className="article-list-item">
        <img
          src="/images/slider1.jpg"
          alt=""
          title=""
          className="article-image"
        />
        <div className="article-content">
          <span className="category">Recycle</span>
          <h3 className="article-title">Barang yang Mudah Didaur Ulang</h3>
          <p className="article-text">
            Menumpuknya limbah rumah tangga adalah permasalahan serius. Limbah
            rumah tangga adalah salah satu…..
          </p>
          <p className="writer-and-time">
            Oleh <span>Akhyar</span> - 19 Juli 2020
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
