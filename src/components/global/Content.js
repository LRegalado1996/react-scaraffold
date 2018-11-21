//dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  static propTypes = ({
    body: PropTypes.object.isRequired
  });

  render() {
    const { body } = this.props;
    // console.log(PropTypes);

    return (
      <div className="Content">
        {body}
      </div>
    ); //end return
  } //end Render
} //end App component

export default Content;
