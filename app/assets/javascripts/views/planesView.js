var App = App || {};

App.PlanesView = Backbone.View.extend ({

  events: {
    'click .main-plane-create': 'renderPlaneCreateForm',
    'submit form': 'createPlane',
    'click a': 'goNavigate',
    'click .cancel': 'cancelButton'
  },

  goNavigate: function(event) {
    event.preventDefault();
  },

  cancelButton: function(event) {
    event.preventDefault();
    this.$el.find('#createPlaneInputs').fadeOut();
    this.$el.find('.main-plane-create').fadeIn();
  },

  initialize: function() {
    this.collection.on("add", this.appendNewPlane, this);
  },

  renderCollection: function (data) {
    this.$el.find("tbody").html("");

    data.each(function(plane){
      var planeView = new App.PlaneView ({ model: plane });
      this.$el.find("tbody").append(planeView.render().el);
    }, this);
  },


  render: function () {
    this.$el.html(JST['planes/app']());
    this.renderCollection(this.collection)
    return this;
  },

  renderPlaneCreateForm: function() {
    this.$el.find(".input-field").html(JST['planes/create-plane-form']());
    this.$el.find('.main-plane-create').fadeOut();

  },

  createPlane: function(event, plane) {
    event.preventDefault();
    var name = this.$el.find('.name').val();
    var rows = this.$el.find('.rows').val();
    var aisles = this.$el.find('.aisles').val();

    var newPlane = this.collection.create({ name: name, rows: rows, aisles: aisles});
   
  },

  appendNewPlane: function(plane) {
    var a = this.$el.find('.name').val();
    var b = this.$el.find('.rows').val();
    var c = this.$el.find('.aisles').val();
    
    if (a == "" || b == "" || c == "") {
      alert("Make sure all of the fields are completed");
      return
    } else {
        var planeView = new App.PlaneView({ model: plane })
        this.$el.find("#planeTable").append(planeView.render().el);
        this.$el.find('#createPlaneInputs').fadeOut();

    }  

  },




});