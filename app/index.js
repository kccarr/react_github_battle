var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// fn(d) =v function takes in data and returns a view

ReactDOM.render(routes, document.getElementById('app'));
