var App = App || {}

App.Planes = Backbone.Collection.extend({
  url: '/planes',
  model: App.Plane
  
});