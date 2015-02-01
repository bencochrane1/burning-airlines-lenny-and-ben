var App = App || {};

App.FlightsView = Backbone.View.extend ({

  events: {
    'click button': 'renderFlightCreateForm',
    'submit form': 'createFlight',
    'keyup .origin': 'searchFlights'
    // 'keyup .destination': 'searchFlights'    
  },

  initialize: function() {

    this.collection.on("change", this.appendNewFlight, this);
  },

  renderCollection: function (data) {

    this.$el.find("tbody").html("");

    data.each(function(flight){
      var flightView = new App.FlightView ({ model: flight });
      this.$el.find("tbody").append(flightView.render().el);
    }, this);
  },


  render: function () {
    this.$el.html(JST['flights/app']());
    this.renderCollection(this.collection);
    return this;
  },

  renderFlightCreateForm: function() {
    this.$el.find(".input-field").html(JST['flights/create-flight-form']());
  },


  createFlight: function(event, flight) {
    event.preventDefault();
    var flight_number = this.$el.find('.flight-number').val();
    var date = this.$el.find('.date').val();
    var origin = this.$el.find('.origin-create').val();
    var destination = this.$el.find('.destination-create').val();
    var plane_id = this.$el.find('.plane_id').val();

    var newFlight = this.collection.create({ flight_number: flight_number, date: date, origin: origin, destination: destination, plane_id: plane_id });

  },

  appendNewFlight: function(flight) {

    var flightView = new App.FlightView({ model: flight })
    this.$el.find("#planeTable").append(flightView.render().el);
  },

  searchFlights: function() {

    var searchOrigin = this.$el.find("input.origin").val();
    // var searchDestination = this.$el.find("input.destination-search").val();

    if (searchOrigin === "") {
      this.renderCollection(this.collection);
    } else {
      this.renderCollection(this.collection.filterBySearch(searchOrigin));   
    }
    
  }


});