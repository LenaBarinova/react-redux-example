/* jshint ignore:start */
"use strict";

var assert = require('assert');
var expect = require('chai').expect;

var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');

var Page = require('../../src/components/page');

describe('Testing Page component', function() {

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
          "text": "This Website is created using React version 1.14. Using Flux as a pattern for dealing with changes.",
          "goUp": "Go up"
        }
      }
    };

  });

  it('Page component has 2 children when given content', function() {

    const renderer = ReactTestUtils.createRenderer();
		renderer.render(<Page data = {_content} />);
		const renderedTree = renderer.getRenderOutput();
    //console.log(renderedTree);
		expect(renderedTree.props.children).to.have.length(2);
  });

});
/* jshint ignore:start */