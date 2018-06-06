
(function () {
  var _ = function(e) {
    return {
      first: function() {
        return e[0];
      },
      last: function() {
        return e[e.length-1];
      },
      without: function() {
        var newArr = [];
        var args = Array.prototype.slice.call(arguments);

        e.forEach(element => {
          if (args.indexOf(element) === -1) {
            newArr.push(element);
          }
        });
        
        return newArr;
      },
      lastIndexOf: function (f) {
        for (var i = e.length; i >= 0; i -= 1) {
          if (e[i] === f) { return i; }
        }
      }
      
    };
  };

  _.range = function () {
    var n = [];
    var args = Array.prototype.slice.call(arguments);
    var i = args.length === 1 ? 0 : _(args).first();
    
    for (; i < _(args).last(); i += 1) {
      n.push(i);
    }
    return n;
  }

  window._ = _;
}());

console.log(_([1, 2, 3]).lastIndexOf(2));
