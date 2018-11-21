//dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

//store
import configureStore from './configureStore';

let store = configureStore();

class Content extends Component {
  static propTypes = ({
    body: PropTypes.object.isRequired
  });

  render() {
    const { body } = this.props;
    
    return (
      <div className="Content">
        <Provider store={store}>
          {body}
        </Provider>
      </div>
    ); //end return
  } //end Render
} //end App component

export default Content;
