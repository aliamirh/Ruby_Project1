//////// UI ////////
$(document).ready(function() {
  $('#form-group').submit(function(event) {
    event.preventDefault();
    var price = "totalPrice";

  $("#total").show();
  });
});






////////Back End////////
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
}
