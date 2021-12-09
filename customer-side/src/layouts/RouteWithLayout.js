import PropTypes from 'prop-types';
import React from 'react';
import {Route} from "react-router-dom";

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route {...rest}
       render={(matchProps) => (
         <Layout>
           <Component {...matchProps}/>
         </Layout>
       )}
    >
    </Route>
  )
}

React.propTypes = {
  layout: PropTypes.any.isRequired,
  component: PropTypes.any.isRequired,
}

export default RouteWithLayout;
