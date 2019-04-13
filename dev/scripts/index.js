const $ = require ('jquery');
const React = require ('react');
const ReactDOM = require ('react-dom');
const historyApiFallback = require('connect-history-api-fallback'); //are this and the corresponding package (and Gulp modification) necessary? they're supposed to 'make sure our URL always points towards our app', whatever that means.


$(document).ready(function(){
    $('.loading-overlay').hide();
})