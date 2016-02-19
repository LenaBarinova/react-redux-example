"use strict";

let React   = require('react');
let ReactDOM = require('react-dom');

let Home = React.createClass ({
  render() {
    return (
      <div className="jumbotron" id="home">
        <div className="container">
          <h1>{this.props.data.header}</h1>
          <p>{this.props.data.text}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

module.exports = Home;