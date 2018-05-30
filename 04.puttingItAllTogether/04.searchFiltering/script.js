$(function() {
  var catalog = [{
    'title': 'The Legend of Zelda: Majora\'s Mask 3D',
    'id': 1,
    'category': 'Nintendo 3DS'
  }, {
    'title': 'Super Smash Bros.',
    'id': 2,
    'category': 'Nintendo 3DS'
  }, {
    'title': 'Super Smash Bros.',
    'id': 3,
    'category': 'Nintendo WiiU'
  }, {
    'title': 'LEGO Batman 3: Beyond Gotham',
    'id': 4,
    'category': 'Nintendo WiiU'
  }, {
    'title': 'LEGO Batman 3: Beyond Gotham',
    'id': 5,
    'category': 'Xbox One'
  }, {
    'title': 'LEGO Batman 3: Beyond Gotham',
    'id': 6,
    'category': 'PlayStation 4'
  }, {
    'title': 'Far Cry 4',
    'id': 7,
    'category': 'PlayStation 4'
  }, {
    'title': 'Far Cry 4',
    'id': 8,
    'category': 'Xbox One'
  }, {
    'title': 'Call of Duty: Advanced Warfare',
    'id': 9,
    'category': 'PlayStation 4'
  }, {
    'title': 'Call of Duty: Advanced Warfare',
    'id': 10,
    'category': 'Xbox One'
  }];
    
  var $categories = $(':checkbox');
  var $items = $('main li');
  var $search = $('#searchField');

  // change event handler on categories
  $categories.on('change', function() {
    var $checkbox = $(this);
    var checked = $checkbox.is(':checked');
    var category = $checkbox.val();
   
    var matched = catalog.filter(function(item) {
      return category === item.category;
    });

    matched.forEach(function(item) {
      $items.filter('[data-id=' + item.id +']').toggle(checked);
    });
  });

  // submit event handler on the search form
  $search.on('', function(e) {
    e.preventDefault();
    console.log('Hello World!');
  });

  $search.click(function(event) {
    console.log(event.type);
  })
});