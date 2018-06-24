var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      var date = (new Date()).toGMTString();
      $('#order_date').append(date);
    },
    template: `
      <script type="text/template" id="inventory_item">
        <tr>
          <td>
            <input type="hidden" name="item_id_ID" value="ID" />
            <label for="item_name_ID">Name</label>
            <input name="item_name_ID" type="text" />
          </td>
          <td>
            <label for="item_stock_number_ID">Stock Number</label>
            <input name="item_stock_number_ID" type="text" maxlength="8" />
          </td>
          <td>
            <label for="item_quantity_ID">Quantity</label>
            <input name="item_quantity_ID" type="number" value="1" />
          </td>
          <td>
            <a href="#" class="delete">Delete</a>
          </td>
        </tr>
      </script>
      `,
    init: function () {
      this.setDate();
    }
  }
}());

$(inventory.init.bind(inventory));
console.log(inventory.template);

