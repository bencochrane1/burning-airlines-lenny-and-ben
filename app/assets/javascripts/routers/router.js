var App = App || {}

App.Router = Backbone.Router.extend({




  openPage: function(url) {
    this.navigate(url, { trigger: true });
  },

  routes: {
    "planes": "airPlanes",
    "flights": "newFlights",
    
  },

  airPlanes: function() {
    console.log("airplanes")
    App.router.navigate("/airplanes", { trigger: true });
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


$("a").on("click", function(event) {
  event.preventDefault();

  var href = $(this).attr("href");
  App.router.openPage(href);

});



