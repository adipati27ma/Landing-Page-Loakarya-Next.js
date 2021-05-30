import React from 'react';

import { Grid } from '@material-ui/core';

function CoBussiness() {
  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      className="co-bussiness-container"
    >
      <Grid item md={2} sm={4} xs={6} className="co-bussiness-item">
        <img src="/images/logo-co-bussiness/warta-logo.png" alt="" title="" />
      </Grid>
      <Grid item md={2} sm={4} xs={6} className="co-bussiness-item">
        <img
          src="/images/logo-co-bussiness/bisnisjkt-logo.png"
          alt=""
          title=""
        />
      </Grid>
      <Grid item md={2} sm={4} xs={6} className="co-bussiness-item">
        <img
          src="/images/logo-co-bussiness/cobisnis-logo.png"
          alt=""
          title=""
        />
      </Grid>
      <Grid item md={2} sm={4} xs={6} className="co-bussiness-item">
        <img src="/images/logo-co-bussiness/warta-logo.png" alt="" title="" />
      </Grid>
      <Grid item md={2} sm={4} xs={6} className="co-bussiness-item">
        <img
          src="/images/logo-co-bussiness/bisnisjkt-logo.png"
          alt=""
          title=""
        />
      </Grid>
      <Grid item md={2} sm={4} xs={6} className="co-bussiness-item">
        <img
          src="/images/logo-co-bussiness/cobisnis-logo.png"
          alt=""
          title=""
        />
      </Grid>
    </Grid>
  );
}

export default CoBussiness;
