import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';

class <%= componentName %> extends Component {

  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  render() {
    return (
      <div></div>
    )
  }
}

<%= componentName %>.propTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(<%= componentName %>);
