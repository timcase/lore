/**
 * This component is intended to reflect the high level structure of your application,
 * and render any components that are common across all views, such as the header or
 * top-level navigation. All other components should be rendered by route handlers.
 **/

import React from 'react';
import Header from './Header';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              {/* Feed will go here */}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
