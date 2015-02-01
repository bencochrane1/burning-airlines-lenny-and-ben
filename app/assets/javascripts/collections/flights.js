var App = App || {}

App.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: App.Flight,

  filterBySearch: function (searchOrigin, searchDestination) {

        var matchedFlights = this.filter(function(flight){
            return flight.attributes.origin.toLowerCase().indexOf(searchOrigin.toLowerCase()) !== -1;
        });

        savedSearch = matchedFlights;

        // matchedOriginFlights = [];
          
        matchedOriginFlights = new App.Flights(savedSearch);
        console.log(matchedOriginFlights);

        var matchedRestOfFlights = matchedOriginFlights.filter(function(matchedOriginFlights) {
            return matchedOriginFlights.attributes.destination.toLowerCase().indexOf(searchDestination.toLowerCase()) !== -1;
        });

        // return  matchedRestOfFlights;

        return new App.Flights(matchedRestOfFlights);


  }




});







// var App = App || {}

// App.Flights = Backbone.Collection.extend({
//   url: '/flights',
//   model: App.Flight,

//   filterBySearch: function (searchOrigin) {
//     var matchedFlights = this.filter(function(flight){

//       return flight.attributes.origin.toLowerCase().indexOf(searchOrigin.toLowerCase()) !== -1;
//       // return flight.attributes.destination.indexOf(searchDestination) !== -1;
//     });
//       return new App.Flights(matchedFlights);
//   }
// });