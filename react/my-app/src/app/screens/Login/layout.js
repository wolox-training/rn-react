import React from 'react';
import { Field } from 'redux-form';

import { required, minLength } from '../../../utils/validations';

import { customInput } from './components/fields/index';

import './styles.css';

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="eMail" component={customInput} type="text" label="E-Mail" validate={[required]} />
      <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
    </form>
  );
}

export default LoginForm;
