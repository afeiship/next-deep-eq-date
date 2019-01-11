(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isDate = function(target) {
    return target instanceof Date;
  };

  nx.deepEqDate = function(inDate1, inDate2) {
    if (inDate1 === inDate2) {
      return true;
    }

    var isDate1 = isDate(inDate1);
    var isDate2 = isDate(inDate2);
    if (isDate1 != isDate2) {
      return false;
    }
    if (isDate1 && isDate2) {
      return inDate1.getTime() === inDate1.getTime();
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepEqDate;
  }
})();
