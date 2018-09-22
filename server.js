const next = require('next');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// doing sleep here is similar to what happens if you want to grab some URLs for example from
// a rest service to add to the router for perf reasons.
sleep(5000).then(() => {

    routes.add('presenterallcurrent', '/presenter/:ccYear','speaker');
    routes.add('speakersessiondetail', '/presenter/:ccYear/:slugSpeaker','speakerdetail');
    // /presenter/2018
    // /presenter/2018/douglas-crockford-1124

    const express = require('express');
    app.prepare().then(() => {
        express().use(handler).listen(3000)
    });

});

//
//
// console.log("about to call express");
// const express = require('express');
// app.prepare().then(() => {
//     express().use(handler).listen(3000)
// });