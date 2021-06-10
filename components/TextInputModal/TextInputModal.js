import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputModal(props) {
  const { type, label, name, required, classNames } = props;
  const classArr = ['text-input'];

  type === 'password' && classArr.push('password-input');
  classArr.push(classNames);

  return (
    <div className="text-input-modal-container">
      <label htmlFor={name} className="text-input-label">
        {label}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        id={name}
        className={classArr.join(' ')}
      />
    </div>
  );
}

TextInputModal.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string,
  required: PropTypes.bool,
};
