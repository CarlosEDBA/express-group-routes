var express = require('express');

express.application.group = express.Router.group = function(arg1, arg2, arg3) {
    var fn, path;

    if (arg2 === undefined) {
        path = "/";
        fn = arg1;
    }
    else {
        path = arg1;
        fn = arg2
    }

    var router = express.Router();
    (arg3 === undefined) ? fn(router) : fn(router, arg3);
    this.use(path, router);
    return router;
};