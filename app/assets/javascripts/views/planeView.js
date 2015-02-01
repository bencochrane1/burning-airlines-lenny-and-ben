

var App = App || {};

App.PlaneView = Backbone.View.extend({
  tagName: 'li',

  render: function() {

    var seatNumbers = (this.model.toJSON().rows)*(this.model.toJSON().aisles);
    var newModel = this.model.set("seats", seatNumbers);
    this.$el.html(JST['planes/plane'](newModel.toJSON()));
    return this;
  }
});

// var App = App || {};

// App.PlaneView = Backbone.View.extend({
//   tagName: 'li',

//   render: function() {
//     this.$el.html(JST['planes/plane'](this.model.toJSON()));
//     return this;
//   }
// });