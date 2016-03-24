
/* jshint ignore:start */
"use strict";

var assert = require('assert');
var expect = require('chai').expect;

var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');

var Home = require('../../src/components/home');

describe('Testing Home component', function() {

	var _content = {};

	before(() => {

		_content = {
      "lang": "en",
      "page": {
        "menu": {
          "home": "Home",
          "about": "About"
        },
        "home": {
          "header": "Getting started with React and Flux",
          "text": "This is a very basic example how to create multilingual React website using Flux.",
          "goUp": "Go up"
        },
        "about": {
          "header": "About the solution",
          "subheader": "Technological stack",
          "text": "This Website is created using React version 1.14. Using Flux as a pattern for dealing with changes.",
          "forMore": "For more, visit",
          "url": "url",
          "goUp": "Go up"
        }
      }
    };

  });

  it('Rendered correct component', function() {

    const renderer = ReactTestUtils.createRenderer();
		renderer.render(<Home data = {_content.page.home} />);
		const renderedTree = renderer.getRenderOutput();
		expect(renderedTree.props.children.props.children).to.have.length(3);
  });

});
/* jshint ignore:start */