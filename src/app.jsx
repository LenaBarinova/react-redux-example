"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const content = require('./reducer');
const Page = require('./components/page');

const store = createStore(content);

ReactDOM.render(
  <Provider {... { store }}>
    <Page/>
  </Provider>,
  document.getElementById('page')
);