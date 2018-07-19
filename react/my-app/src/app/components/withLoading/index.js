import React from 'react';

import Loader from '../../screens/Login/components/Loader';

const withLoadingWrapper = (
  ComponentLoader = Loader,
  withCondition = ({ loading }) => loading
) => Component => {
  function withLoading(props) {
    return withCondition(props) ? <ComponentLoader /> : <Component {...props} />;
  }
  return withLoading;
};

export default withLoadingWrapper;
