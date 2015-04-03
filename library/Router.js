// Router.js
define(['react', 'backbone', 'jsx!KosInterface','jsx!KosInterfaceII'], function (React, Backbone, KosInterface,KosInterfaceII) {
    "use strict";
    var currentView = null;
    var rootNode = document.body;
    var setView = function (view) {
        // Remove the previous view if exists.
        if (currentView) {
            React.unmountComponentAtNode(rootNode)
        }

        currentView = view;
        // Add the new view.
        //console.log();

    }
    var Router = Backbone.Router.extend({
        initialize: function () {
            Backbone.history.start()
        },
        routes: {
            '': 'job/add',
            'kos':'kos'
        },
        'job/add': function (step) {
            // Redirect to 'job/add/step=0/select'.
            //this.navigate('job/add/step=0/select', {trigger: true});
            //ViewA = React.createFactory(ViewA);
            //var start = new Date();
            //React.render(ViewA({start: start}), document.body);
            //setView(cs);
            KosInterface = React.createFactory(KosInterface);
            React.render(KosInterface(),document.body);
        },
        'job/add/step=0/select': function () {
            alert('Hello!');
        },
        'kos':function() {
            KosInterfaceII = React.createFactory(KosInterfaceII);
            React.render(KosInterfaceII(),document.body);
        }
    });
    return Router;
})