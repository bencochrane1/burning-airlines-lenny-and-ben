var App = App || {};

App.PlanesView = Backbone.View.extend ({

  events: {
    'click button': 'renderPlaneCreateForm',
    'submit form': 'createPlane'    
  },

  initialize: function() {
    console.log(this.collection);
    this.collection.on("change", this.appendNewPlane, this);
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

  createPlane: function(event, plane) {
    event.preventDefault();
    var name = this.$el.find('.name').val();
    var rows = this.$el.find('.rows').val();
    var aisles = this.$el.find('.aisles').val();

    var newPlane = this.collection.create({ name: name, rows: rows, aisles: aisles});
    
    console.log(newPlane);
    console.log(newPlane.toJSON());

  },

  appendNewPlane: function() {
    console.log("you're out!");
  }

});