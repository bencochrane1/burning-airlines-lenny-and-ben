var App = App || {}

App.Flights = Backbone.Collection.extend({
  url: '/api/flights',
  model: App.Flight,

  filterBySearch: function (searchOrigin, searchDestination) {

        var matchedFlights = this.filter(function(flight){
            return flight.attributes.origin.toLowerCase().indexOf(searchOrigin.toLowerCase()) !== -1;
        });

        savedSearch = matchedFlights;
          
        matchedOriginFlights = new App.Flights(savedSearch);
        //console.log(matchedOriginFlights);

        var matchedRestOfFlights = matchedOriginFlights.filter(function(matchedOriginFlights) {
            return matchedOriginFlights.attributes.destination.toLowerCase().indexOf(searchDestination.toLowerCase()) !== -1;
        });

        return new App.Flights(matchedRestOfFlights);
  }

});
