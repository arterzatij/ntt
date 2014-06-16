var $ = require('jquery');
var Backbone = require('backbone');
var Timer = require('../utils/timer');

Backbone.$ = $;

module.exports = Backbone.View.extend({

  initialize: function() {
    this.$el = $('#createTask');
    this.timer = new Timer('#timer');
  },

  events : {
    'click #start.icon-start' : 'startTask',
    'click #start.icon-stop'  : 'stopTask',
    'click #selectProject'    : 'openProjectPicker',
    'click #close'            : 'closeProjectPicker',
    'click a.project'         : 'selectProject',
    'keyup .description'      : 'verifyValue'
  },

  startTask : function (e) {
    e.preventDefault();
    var $input = this.$('.description');
    if ($input.val().trim().length > 0) {
      this.timer.start();
      $input.removeClass('error');
      this.$('#start').addClass('icon-stop').removeClass('icon-start');
    } else {
      $input.addClass('error');
      $input.attr('placeholder', 'What are you working on!');
    }
  },

  stopTask : function (e) {
    e.preventDefault();
    this.timer.stop();
    this.$('#start').addClass('icon-start').removeClass('icon-stop');
  },

  openProjectPicker : function (e) {
    e.preventDefault();
    this.$('#projectPicker').addClass('show');
  },

  closeProjectPicker : function (e) {
    e.preventDefault();
    this.$('#projectPicker').removeClass('show');
    this.$('input.term').val('');
  },

  selectProject : function (e) {
    e.preventDefault();
    var $project = $(e.target);

    var project = $project.attr('data-project');
    var client = $project.attr('data-client');

    this.$('#selectProject').text(project);
    this.$('p.client').text(client);
    this.$('#projectPicker').removeClass('show');
    this.$('input.term').val('');
  },

  verifyValue : function (e) {
    e.preventDefault();
    var $input = this.$('.description');

    if ($input.val().length > 2 &&
        $input.val().trim().length == 0) {
      $input.addClass('error');
      $input.attr('placeholder', 'Please add a description!');
      $input.val('');
    } else {
      $input.removeClass('error');
    }
  }
});
