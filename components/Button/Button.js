import React from 'react';
import PropTypes from 'prop-types';

import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textDecoration: 'none',
  },
}));

function BaseButton(props) {
  const { text, endIcon, onClick, className } = props;

  return (
    <MuiButton
      disableRipple
      className={className}
      endIcon={endIcon}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
}

function Button(props) {
  const classes = useStyles();
  const { text, link, endIcon, onClick, className } = props;
  const classArr = ['button'];
  classArr.push(className);

  if (link) {
    return (
      <a target="blank" href={link} className={classes.buttonLink}>
        <BaseButton
          text={text}
          className={classArr.join(' ')}
          endIcon={endIcon}
          onClick={onClick}
        />
      </a>
    );
  }

  return (
    <BaseButton
      text={text}
      className={classArr.join(' ')}
      endIcon={endIcon}
      onClick={onClick}
    />
  );
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.bool,
  endIcon: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
