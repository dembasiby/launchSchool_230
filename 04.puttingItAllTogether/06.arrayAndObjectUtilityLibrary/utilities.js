
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
      pluck: function (str) {
        var arr = [];

        e.forEach(function (element) {
          for (var k in element) {
            if (k === str) { arr.push(element[k]); }
          }
        });

        return arr;
      },
      keys: function () {
        var arr = [];

        for (var k in e) {
          if (arr.indexOf(k) === -1) { arr.push(k); }
        }

        return arr;
      },
      values: function () {
        return this.keys().map(function (key) {
          return e[key];
        });
      },
      pick: function () {
        var newObj = {};
        var args = [].slice.call(arguments);
        args.forEach(function (prop) {
          if (e[prop]) { newObj[prop] = e[prop]; }
        });
        return newObj;
      },
      omit: function () {
        var newObj = {};
        var args = [].slice.call(arguments);
        for (var k in e) {
          if (!args.includes(k)) { newObj[k] = e[k]; }
        }
        return newObj;
      },
      has: function (prop) {
        return !!e[prop];
      },

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

  _.extend = function () {
    var args = [].slice.call(arguments).slice(1);
    var oldObj = arguments[0];
    args.forEach(function (obj) {
      for (var k in obj) { oldObj[k] = obj[k]; }
    });

    return oldObj;
  };
  _.isElement = function() {

  };

  window._ = _;
}());


