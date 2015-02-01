var App = App || {};

App.PlaneView = Backbone.View.extend({
  tagName: 'tr',

  render: function() {
    var seatNumbers = (this.model.toJSON().rows)*(this.model.toJSON().aisles);
    var newModel = this.model.set("seats", seatNumbers);
    this.$el.html(JST['planes/plane'](newModel.toJSON()));
    return this;
  }
});