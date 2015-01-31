var App = App || {};

App.PlaneView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    this.$el.html(JST['plane'](this.model.toJSON()));
    return this;
  }
});