var App = App || {};

App.PlanesView = Backbone.View.extend ({

  renderCollection: function (data) {
    this.$el.find("ul").html("");

    data.each(function(plane){
      var planeView = new App.PlaneView ({ model: plane });
      this.$el.find("ul").append(planeView.render().el);
    }, this);
  },


  render: function () {
    this.$el.html(JST['app']());
    this.renderCollection(this.collection)
    return this;
  },

});