import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLength } from '../../../utils/validations';

import { customInput } from './components/fields/index';
import Load from './components/Loader/index';

import './styles.css';

function LoginForm({ handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="eMail" component={customInput} type="email" label="E-Mail" validate={[required]} />
      <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <div>
        <button type="submit">Submit</button>
        {loading && <Load />}
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
