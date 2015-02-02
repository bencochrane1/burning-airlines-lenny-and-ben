var App = App || {}

App.Planes = Backbone.Collection.extend({
  url: '/api/planes',
  model: App.Plane
  
});