var App = App || {};

App.FlightView = Backbone.View.extend({
  tagName: 'tr',

  render: function() {
    this.$el.html(JST['flights/flight'](this.model.toJSON()));
    return this;
  }
});