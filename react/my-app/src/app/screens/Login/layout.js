import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLength } from '../../../utils/validations';

import { customInput } from './components/fields/index';
import Load from './components/Loader/index';

import './styles.css';
import { FIELDS, FORM } from './constants';

const passwordValidation = [required, minLength];

function LoginForm({ handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name={FIELDS.EMAIL} component={customInput} type="email" label="E-Mail" validate={[required]} />
      <Field
        name={FIELDS.PASSWORD}
        component={customInput}
        type="password"
        label="Password"
        validate={passwordValidation}
      />
      <div>
        <button type="submit">Submit</button>
        {loading && <Load />}
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM.LOGIN
})(LoginForm);
