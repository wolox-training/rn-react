import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength } from '../../../utils/validations';

import Load from './components/Loader/index';
import customInput from './components/fields/index';
import './styles.css';
import { FIELDS, FORM } from './constants';

const passwordValidation = [required, minLength];
const emailValidation = [required];

function LoginForm({ handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name={FIELDS.EMAIL}
        component={customInput}
        type="email"
        label="E-Mail"
        validate={emailValidation}
      />
      <Field
        name={FIELDS.PASSWORD}
        component={customInput}
        type="password"
        label="Password"
        validate={passwordValidation}
      />
      <Fragment>
        <button type="submit">Submit</button>
        {loading && <Load />}
      </Fragment>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool
};

export default reduxForm({
  form: FORM.LOGIN
})(LoginForm);
