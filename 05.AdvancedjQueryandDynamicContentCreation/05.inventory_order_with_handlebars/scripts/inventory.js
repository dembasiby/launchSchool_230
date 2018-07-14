var inventory;
(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = (new Date()).toGMTString();
      $('#order_date').append(date);
    },
    cacheTemplate: function () {
      var $iTmpl = $('#inventory_item').html();
      this.template = Handlebars.compile($iTmpl);
      return this.template;
    },
    add: function() {
      this.lastId += 1;

      var item = {
        id: this.lastId,
        name: '',
        stockNumber: '',
        quantity: 1
      };

      this.collection.push(item);
      return item;
    },
    update: function($item) {
      var id = this.findID($item);

      this.collection.map(function(i) {
        if (i.id === id) {
          i.name = $("input[name^=item_name").val();
          i.stockNumber = $("input[name^=item_stock_number").val();
          i.quantity = $("input[name^=item_quantity").val();
        }
      });
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      var $item = this.template(item);
      $('#inventory').append($item);
    },
    findParent: function(e) {
      return $(e.target).closest('tr');
    },
    findID: function($item) {
      return +$($item).find("input[type='hidden']").val();
    },
    deleteItem: function(e) {
      e.preventDefault();
      var self = this;
      var $item = $(this.findParent(e)).remove();
      var id = this.findID($item);

      this.collection.map(function(elem, idx) {
        if (elem.id === id) {
          return self.collection.splice(idx, 1);
        };
      });
    },
    updateItem: function(e) {
      var $item = this.findParent(e);
      this.update($item);
    },
    bindEvents: function() {
      $('#add_item').on('click', $.proxy(this.newItem, this));
      $('#inventory').on('click', 'a.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', 'td input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  }
}());

$(inventory.init.bind(inventory));
