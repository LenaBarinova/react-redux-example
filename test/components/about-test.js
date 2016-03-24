/* jshint ignore:start */
"use strict";

const assert = require('assert');
const expect = require('chai').expect;

const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');

const About = require('../../src/components/about');

describe('Testing About component', function() {

  let _content = {};

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
    renderer.render(<About data = {_content.page.about} />);
    const renderedTree = renderer.getRenderOutput();
    expect(renderedTree.props.children.props.children).to.have.length(5);
  });

});
/* jshint ignore:start */