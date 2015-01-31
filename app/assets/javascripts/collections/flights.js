var App = App || {}

App.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: App.Flight,

  filterBySearch: function (searchOrigin) {
    var matchedFlights = this.filter(function(flight){

      return flight.attributes.origin.indexOf(searchOrigin) !== -1;
      // return flight.attributes.destination.indexOf(searchDestination) !== -1;
    });
      return new App.Flights(matchedFlights);
  }
});