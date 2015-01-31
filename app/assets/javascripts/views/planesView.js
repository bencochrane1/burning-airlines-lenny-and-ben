var App = App || {};

App.PlanesView = Backbone.View.extend ({

  events: {
    'click button': 'renderPlaneCreateForm'
  },

  renderCollection: function (data) {
    this.$el.find("ul").html("");

    data.each(function(plane){
      var planeView = new App.PlaneView ({ model: plane });
      this.$el.find("ul").append(planeView.render().el);
    }, this);
  },


  render: function () {
    this.$el.html(JST['planes/app']());
    this.renderCollection(this.collection)
    return this;
  },

  renderPlaneCreateForm: function() {
    this.$el.html(JST['planes/create-plane-form']());
  }

});