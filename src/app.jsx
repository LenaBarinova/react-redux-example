"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;

const Page = require('./components/page');
const content = require('./reducer');

const store = createStore(content);

ReactDOM.render(
  <Provider {... { store }}>
    <Page/>
  </Provider>,
  document.getElementById('page')
);
