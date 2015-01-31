var App = App || {}

App.Router = Backbone.Router.extend({

  routes: {
    "/airplanes": "airPlanes",
    "": "newFlights"

  },

  airPlanes: function() {
    var planesCollection = new App.Planes();
    planesCollection.fetch().then(function() {
      var planesView = new App.PlanesView( { collection: planesCollection });
      $("#container").html(planesView.render().el);
    });
  },

  newFlights: function() {
    var flightsCollection = new App.Flights();
    flightsCollection.fetch().then(function() {
      var flightsView = new App.FlightsView( { collection: flightsCollection });
      $("#container").html(flightsView.render().el);
    });
  }
});

App.router = new App.Router();