var $ = require('jquery');
var TimeFormat = require('./timeFormat');

module.exports = function (input) {
  var $input  = $(input),
      _timer   = undefined,
      _started = false,
      _time    = { s : 1, m : 0, h : 0 };

  return {
    start : function () {
      if (!_started) {
        _timer = setInterval(
          function () {
            if (_time.s == 60) {
              _time.s = 0;
              _time.m++;
              if (_time.m == 60) {
                _time.m = 0;
                _time.h++;
              }
            }
            $input.val(new TimeFormat(_time).format());
            _time.s++;
          },
          1000
        );
        _started = true;
      }
    },
    stop  : function () {
      if (_started) {
        clearInterval(_timer);
        _started = false;
      }
    }
  }
};