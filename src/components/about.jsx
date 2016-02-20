"use strict";

let React = require('react');

let About = React.createClass ({

  render() {
    const data = this.props.data;

    return (
      <div className="jumbotron" id="about">
        <div className="container">
          <h1>{data.header}</h1>
          <p> {data.text} </p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

module.exports = About;