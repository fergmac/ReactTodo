var React = require('react');
var ReactDOM = require('react-dom');
//destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Fondation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <p>Boilplate  3 project</p>,
    document.getElementById('app')
);