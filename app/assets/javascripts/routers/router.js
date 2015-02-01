var App = App || {}

App.Router = Backbone.Router.extend({

  openPage: function(url) {
    this.navigate(url, { trigger: true });
  },

  routes: {
    "planes": "airPlanes",
    "flights": "newFlights",
    "": "showFlight"
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
  },

  showFlight: function(id){
    var newFlightCollection = new App.Flights();
    newFlightCollection.fetch().then(function(){
      var flightModel = newFlightCollection.models[3];
      var showFlightView = new App.ShowFlightView( { model: flightModel }); 
      $("#container").html(showFlightView.render().el);
    });
  }
});



App.router = new App.Router();


$("a").on("click", function(event) {
  event.preventDefault();

  var href = $(this).attr("href");
  App.router.openPage(href);

});



