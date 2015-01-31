var App = App || {};

App.PlanesView = Backbone.View.extend ({

  events: {
    'click button': 'renderPlaneCreateForm',
    'submit form': 'createPlane'
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
    this.$el.find(".input-field").html(JST['planes/create-plane-form']());
  },

  createPlane: function(event) {
    event.preventDefault();
    var name = this.$el.find('.name').val();
    var rows = this.$el.find('.rows').val();
    var aisles = this.$el.find('.aisles').val();

    var planesCollection = new App.Planes();
    var newPlane = planesCollection.create({ name: name, rows: rows, aisles: aisles})
    
    console.log(newPlane);
  }

});