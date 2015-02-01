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
    console.log("we are at new flights");
    var flightsCollection = new App.Flights();
    flightsCollection.fetch().then(function() {
      var flightsView = new App.FlightsView( { collection: flightsCollection });
      $("#container").html(flightsView.render().el);
    });
  },

  showFlight: function(){
    console.log("this is home");
    // console.log("we are at show flights");
    var flightsCollection = new App.Flights();
    // console.log(flight);

    flightsCollection.fetch().then(function() {
      // console.log(this.collection);
      console.log(flightsCollection.models[0].attributes);
      var flightsView = new App.FlightsView( { collection: flightsCollection });
      $("#container").html(flightsView.render().el);
    });

    // flight.fetch({
    //   success: function() {
    //     var flightView = new App.FlightView({model: flight});
    //     $("#container").html(flightView.el);
    //   }
    // })
    

  }
});



App.router = new App.Router();


$("a").on("click", function(event) {
  event.preventDefault();

  var href = $(this).attr("href");
  App.router.openPage(href);

});



