module.exports = function (time) {

  // Value holder
  var _time = time;

  // Value to String method
  var v2s = function (value) {
    var strvalue = value.toString();
    return '00'.substring(strvalue.length).concat(strvalue);
  };

  return {
    format : function () {
      return [v2s(_time.h), v2s(_time.m), v2s(_time.s)].join(':');
    }
  }
};