var App = App || {};

App.PlaneView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    this.$el.html(JST['planes/plane'](this.model.toJSON()));
    return this;
  }
});