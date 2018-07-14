var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79,
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55,
}];

var $list = $('ul');

// Compile both templates for use later
var productsList = Handlebars.compile($('#productsList').html());
var productTemplate = Handlebars.compile($('#productTemplate').html());

// Also register the product template as a partial
Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

// Current the current list to the page
$list.html(productsList({ items: products }));

// Create a new product
var soup = {
  name: 'Soup',
  quantity: 1,
  price: 1.29,
  on_sale: true,
}

// Render the new product with the product template
$list.append(productTemplate(soup));