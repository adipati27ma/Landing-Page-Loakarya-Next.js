import React from 'react';
import PropTypes from 'prop-types';

// import Link from 'next/link';
import { Button as MuiButton, Link } from '@material-ui/core';

function BaseButton(props) {
  const { text, endIcon, type, onClick, classNames } = props;

  return (
    <MuiButton
      disableRipple
      className={classNames}
      endIcon={endIcon}
      onClick={onClick}
      type={type || 'button'}
    >
      {text}
    </MuiButton>
  );
}

function Button(props) {
  const { text, link, endIcon, type, onClick, classNames } = props;
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
          type={type}
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
      type={type}
    />
  );
}

Button.propTypes = {
  text: PropTypes.string,
  classNames: PropTypes.string,
  link: PropTypes.string,
  endIcon: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
