var App = App || {};

App.FlightView = Backbone.View.extend({
  tagName: 'tr',

  render: function() {
    var flight = this
    var plane = new App.Plane({id: this.model.get('plane_id')});
    this.$el.html(JST['flights/flight'](this.model.toJSON()));
    return this;
  }
});