//dependences
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Actions
import { loadBooks, loadSingleBook } from '../../actions/libreryAction';

class Librery extends Component {

  componentWillMount() {
    const routeID = this.props.match.params.id ? this.props.match
    .params.id : 0;
    this.props.loadBooks();
    this.props.loadSingleBook(routeID);
  } // end componentWillMount

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.loadSingleBook(nextProps.match.params.id);
    }

  }

  getAllItems() {
    const dataAllBooks = this.props.books.map((book, key) => {
      return (
        <li key={book.id}>
          <Link to={`/librery/${book.id}`}>
            {book.title}
          </Link>
        </li>
      )
    })
    return dataAllBooks;
  }

  getItem() {
    const dataBooks = this.props.book.map((book, key) => {
      return (
        <li key={key}>
            {book.title}
        </li>
      )
    })
    return dataBooks;
  } //getItem

  render() {
    const routeID = this.props.match.params.id ? this.props.match.params.id : 0;
    return (
      <ul>
        {
          routeID === 0 ?
            this.getAllItems()
          : this.getItem()
        }
      </ul>
    ); // end return
  } // end render
} // end Librery Component

//reducer
const mapStateToProps = state => {
  return {
    books: state.librery.books,
    book: state.librery.book
  }
};

//action
const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => dispatch(loadBooks()),
    loadSingleBook: (routeID) => dispatch(loadSingleBook(routeID))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Librery);
