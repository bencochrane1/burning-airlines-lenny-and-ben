var App = App || {};

App.PlanesView = Backbone.View.extend ({

  events: {
    'click button': 'renderPlaneCreateForm',
    'submit form': 'createPlane',
    'click a': 'goNavigate'    
  },

  goNavigate: function(event) {
    event.preventDefault();
    console.log($(event.currentTarget));
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
   
  },

  appendNewPlane: function(plane) {
    console.log(plane);
    var planeView = new App.PlaneView({ model: plane })
    this.$el.append(planeView.render().el);
    this.createTable();
  },

  createTable: function() {
 
    var tableElem, rowElem, colElem;

    var a = this.$el.find('.rows').val();
    var b = this.$el.find('.aisles').val();
   

   if (a == "" || b == "") {
     alert("Please enter some numeric value");
   } else {
     tableElem = document.createElement('table');

     for (var i = 0; i < a; i++) {
       rowElem = document.createElement('tr');

       for (var j = 0; j < b; j++) {
         colElem = document.createElement('td');
         colElem.appendChild(document.createTextNode(j + 1)); //to print cell number
         rowElem.appendChild(colElem);
       }

       tableElem.appendChild(rowElem);
     }

     document.body.appendChild(tableElem);


   }
 }




});