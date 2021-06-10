import React, { useState } from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

export default function ArticleList({ profileArticles }) {
  // const [articleData, setArticleData] = useState();
  // const [tanggal, setTanggal] = useState();
  // const [bulan, setBulan] = useState();
  // const [tahun, setTahun] = useState();

  return (
    <Grid container spacing={8} className="article-list-container">
      {profileArticles.slice(0, 3).map((article) => {
        // console.log(article);

        // fetch(`https://dev.api.loakarya.co/api/article/${article.slug}`)
        //   .then((response) => response.json())
        //   .then((response) => setArticleData(response));

        // console.log(articleData);

        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="article-list-item"
            key={article.id}
          >
            <Link href={`/article/${article.slug}`}>
              <a>
                <img
                  src={article.thumbnail}
                  alt=""
                  title=""
                  className="article-image"
                />
                <div className="article-content">
                  <span className="category">Recycle</span>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-text">{article.content}</p>
                  <p className="writer-and-time">
                    Oleh <span>Admin</span> - 22 April 2021
                  </p>
                </div>
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
