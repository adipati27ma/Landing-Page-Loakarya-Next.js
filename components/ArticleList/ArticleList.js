import React from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

export default function ArticleList({ profileArticles }) {
  return (
    <Grid container spacing={8} className="article-list-container">
      {profileArticles.slice(0, 3).map((article) => (
        <Link href={`/article/${article.slug}`} key={article.id}>
          <Grid item xs={12} sm={6} md={4} className="article-list-item">
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
                Oleh <span>Akhyar</span> - 19 Juli 2020
              </p>
            </div>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
