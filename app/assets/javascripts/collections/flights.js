var App = App || {}

App.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: App.Flight
  
});