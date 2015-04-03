require.config({
    baseUrl: 'library',
    paths: {
        "jquery": '../bower_components/jquery/dist/jquery',
        "underscore": '../bower_components/underscore/underscore',
        "backbone": '../bower_components/backbone/backbone',
        "react": "react-with-addons",
        "JSXTransformer": "JSXTransformer"

    },
         jsx: {
            fileExtension: '.jsx',
            harmony: true,
            stripTypes: true
        },
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        "jquery" : {
          "exports" : "$"
        },
        underscore: {
            deps: [
            ],
            exports: '_'
        }
    }

});
require(['Router'], function (Router) {
    'use strict';
    var r = new Router();
});