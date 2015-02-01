var App = App || {};

App.FlightView = Backbone.View.extend({
  tagName: 'tr',

  intialize: function() {
    // var flight = this
    // var plane = new App.Plane({id: this.model.get('plane_id')});

  },

  render: function() {
    var flight = this
    var plane = new App.Plane({id: this.model.get('plane_id')});
    console.log(plane.toJSON());


    


      // flight.rows = plane.get('rows');
      // flight.aisles = plane.get('aisles');
      // console.log(flight.rows);
      // console.log(flight.aisles);



    this.$el.html(JST['flights/flight'](this.model.toJSON()));
    return this;

  }
});