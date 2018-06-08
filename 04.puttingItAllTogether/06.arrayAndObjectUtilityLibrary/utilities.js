
(function () {
  function findObjs(e, obj, multiple) {
    var obj1 = multiple ? [] : undefined;
        
    e.some(function(element) {
      var match = true;

      for ( var key in obj ) {
        if (element[key] !== obj[key]) {
          match = false;
        }
      }

      if (match) { 
        if (!obj1) {
          obj1 = element; 
          return true;
        }
        obj1.push(element);
        
      }
    });

    return obj1;
  }

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

        e.forEach( function (element) {
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
      },
      sample: function (qty) {
        var arr = [];
        var copy = e.slice();

        var get = function () {
          var idx = Math.floor(Math.random() * e.length);
          var el = copy[idx];
          copy.splice(idx, 1);

          return el;
        };

        if (!qty) { return get(); }
        while (qty) {
          arr.push(get());
          qty -= 1;
        }

        return arr;
      },
      findWhere: function (obj) {
        return findObjs(e, obj, false);
      },
      where: function(obj) {
        return findObjs(e, obj, true);
      },
      pluck: function () {

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
  };

  window._ = _;
}());


