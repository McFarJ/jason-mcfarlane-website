var express = require('express')
var path = require('path')
var history = require('connect-history-api-fallback');

var app = express()

app.use(history());

// this is using a static server to serve the website:
app.use(express.static(__dirname))

// what's this doing?
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })
app.get('*', function (req, res) {
    // res.sendFile(path.join('./index.html'))
    res.alert('WORKING')
    // res.send('HELLLOOOOOOOO!')
})




var PORT = process.envPORT || 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost: ' + PORT)
})

// What exactly is middleware and why is it needed
    // it's a nebulous term... middleware connects things.
        // Then what is middleware in the context of express in javascript?
            // Express itself is 'a routing and middleware web framework'; each function with access to req, res, and next are middleware functions.
// Why use express-history-api-fallback instead of connect-history-api-fallback
    // connect-history-api-fallback is newer and much more popular.
// How does app.use(express.static(__dirname, 'public')) work?
// What is res.sendFile(path.join(__dirname, 'index.html')) doing?



// var express = require('express')
// var path = require('path')
// var history = require('connect-history-api-fallback');

// var app = express()

// app.use(history());

// // this is using a static server to serve the website:
// // app.use(express.static(__dirname, 'public'))
// // or app.use(express.static('public')); ?



// var PORT = process.envPORT || 8080
// app.listen(PORT, function() {
//     console.log('Production Express server running at localhost: ' + PORT)
// })
