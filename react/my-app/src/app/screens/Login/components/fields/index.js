import React from 'react';
import cx from 'classnames';

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return 'async-validating';
  }
  if (meta.active) {
    return null;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
  return null;
};

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input {...input} type={type} autoFocus={props.autoFocus} />
      <label>{label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && (
          <div className="feedback-text error-text">{meta.error}</div>
        )}
    </div>
  );
};
