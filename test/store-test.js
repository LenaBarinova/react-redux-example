'use strict';

var expect = require('chai').expect;
var _ = require('lodash');

var store = require('../src/store');
var actions = require('../src/actions');

describe('Getting website content in different languages', () => {

	var _content = {};

	before(() => {

		_content = [_content];

		actions.initApp();

	});

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	it('first', () => {
		expect(1).to.equal(1);
	});

});