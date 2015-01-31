var App = App || {}

App.Router = Backbone.Router.extend({

  routes: {
    "": "airPlanes"
  },

  airPlanes: function() {
    var planesCollection = new App.Planes();
    planesCollection.fetch().then(function() {
      var planesView = new App.PlanesView( { collection: planesCollection });
      $("#container").html(planesView.render().el);
    });
  }
});

App.router = new App.Router();