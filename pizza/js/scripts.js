//////// UI ////////
$(document).ready(function() {
  $('#form-group').submit(function(event) {
    event.preventDefault();

  });
});






////////Back End////////
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
}
