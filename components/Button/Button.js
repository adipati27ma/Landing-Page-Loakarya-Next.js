import React from 'react';
import PropTypes from 'prop-types';

// import Link from 'next/link';
import { Button as MuiButton, Link } from '@material-ui/core';

function BaseButton(props) {
  const { text, endIcon, onClick, classNames } = props;

  return (
    <MuiButton
      disableRipple
      className={classNames}
      endIcon={endIcon}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
}

function Button(props) {
  const { text, link, endIcon, onClick, classNames } = props;
  const classArr = ['button'];
  classArr.push(classNames);

  if (link) {
    return (
      <a target="blank" href={link} style={{ textDecoration: 'none' }}>
        <BaseButton
          text={text}
          classNames={classArr.join(' ')}
          endIcon={endIcon}
          onClick={onClick}
        />
      </a>
    );
  }

  return (
    <BaseButton
      text={text}
      classNames={classArr.join(' ')}
      endIcon={endIcon}
      onClick={onClick}
    />
  );
}

Button.propTypes = {
  text: PropTypes.string,
  namaClass: PropTypes.string,
  link: PropTypes.string,
  endIcon: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
