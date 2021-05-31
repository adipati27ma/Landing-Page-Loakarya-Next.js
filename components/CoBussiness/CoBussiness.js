import React from 'react';

import { Grid } from '@material-ui/core';

const coBussiness = [
  {
    id: 1,
    name: 'WartaEkonomi.co.id',
    logo: '/images/logo-co-bussiness/warta-logo.png',
  },
  {
    id: 2,
    name: 'BisnisJakarta.id',
    logo: '/images/logo-co-bussiness/bisnisjkt-logo.png',
  },
  {
    id: 3,
    name: 'cobisnis',
    logo: '/images/logo-co-bussiness/cobisnis-logo.png',
  },
  {
    id: 4,
    name: 'WartaEkonomi.co.id',
    logo: '/images/logo-co-bussiness/warta-logo.png',
  },
  {
    id: 5,
    name: 'BisnisJakarta.id',
    logo: '/images/logo-co-bussiness/bisnisjkt-logo.png',
  },
  {
    id: 6,
    name: 'Cobisnis',
    logo: '/images/logo-co-bussiness/cobisnis-logo.png',
  },
];

function CoBussiness() {
  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      className="co-bussiness-container"
    >
      {coBussiness.map((company) => (
        <Grid
          key={company.id}
          item
          md={2}
          sm={4}
          xs={6}
          className="co-bussiness-item"
        >
          <img src={company.logo} alt={company.name} title={company.name} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CoBussiness;
