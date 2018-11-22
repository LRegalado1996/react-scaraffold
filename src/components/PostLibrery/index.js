//dependences
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { sendpostBook }  from '../../actions/postLibreryAction';

class PostLibrery extends Component {

  constructor() {
    super()
    this.state = {
      dataSend: ' ',
    }
  } // end constructor

  componentWillMount() {
    const sendData = this.state.dataSend;
    this.props.sendPostBook(sendData);
  }

  componentWillReceiveProps(nextProps) {

  }

  handleChange = event => {
    this.setState({
      dataSend: event.target.value
    });
  } //end handleChange

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.dataSend
    };
    this.props.sendPostBook(user);
    console.log(this.props);
  } // end handleSubmit

  render() {
    return (
      <div className='postLibrery'>
        <br />
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='prueba'>Data to send </label>
          <input
            id='prueba'
            name='dataSend'
            type='text'
            onChange={this.handleChange}
            placeholder='...'
            required
          />
          <button>Send</button>
        </form>
      </div>
    ); //end return
  } // end render
} // end PostLibrery component

//reducer
const mapStateToProps = state => {
  console.log(state);
  return {
    postBook: state.postLibrery.postBook
  }
};

//action
const mapDispatchToProps = (dispatch) => {
  return {
    sendPostBook: (sendData = {}) => (dispatch(sendpostBook(sendData)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLibrery);
