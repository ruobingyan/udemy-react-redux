import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books // object returned here will be avaiable in this.props
  };
}

export default connect(mapStateToProps)(BookList);

// this connect takes a function and a conponent , returns a container
