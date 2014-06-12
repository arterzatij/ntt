var $ = require('jquery');
var CreateTaskView = require('./views/createTask');

$(document).on('ready', function () {
  new CreateTaskView();
});
