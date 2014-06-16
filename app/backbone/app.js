var $ = require('jquery');
var Me = require('./models/me');
var CreateTaskView = require('./views/createTask');
var ProjectPickerView = require('./views/projectPicker');

window.views = {};
window.models = {};
window.collections = {};

$(function () {
  
  window.models.me = new Me();

  window.views.projectPicker = new ProjectPickerView({
    el : '#projectPicker',
    model : models.me
  });
  views.projectPicker.render();

  window.views.createTask = new CreateTaskView();
});
