var TimeFormat = function (time) {

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

var Timer = function (input) {
  var $input  = $(input),
      timer   = undefined,
      started = false,
      time    = { s : 1, m : 0, h : 0 };

  return {
    start : function () {
      if (!started) {
        timer = setInterval(
          function () {
            if (time.s == 60) {
              time.s = 0;
              time.m++;
              if (time.m == 60) {
                time.m = 0;
                time.h++;
              }
            }
            $input.val(new TimeFormat(time).format());
            time.s++;
          },
          1000
        );
        started = true;
      }
    },
    stop  : function () {
      if (started) {
        clearInterval(timer);
        started = false;
      }
    },
    reset : function(){
      time.s = 0;
      time.m = 0;
      time.h = 0;
    }
  }
};


CreateTaskView = Backbone.View.extend({
    events : {
        'click #start.icon-start' : 'startTask',
        'click #start.icon-stop'  : 'stopTask',
        'click #project'     : 'openProjectList',
        'click #close'       : 'closeProjectList',
        'click a.project'    : 'selectProject',
        'click #createproj'  : 'newProject',
        'click #saveProject' : 'saveProject',
        'keyup #findProject' : 'lookupProject',
        'keyup #description' : 'verifyValue'
    },
    initialize: function(){
      this.$el = $('#createTask');
      this.timer = new Timer('#time');
    },
    startTask : function (e) {
      e.preventDefault();
      var $input = this.$('#description');
      if ($input.val().trim().length > 0) {
        this.timer.start();
        this.$('#start').addClass('icon-stop').removeClass('icon-start');
      } else {
        $input.addClass('error');
        $input.attr('placeholder', 'Please add a description!');
      }
    },
    stopTask : function (e) {
      e.preventDefault();
      this.timer.stop();
      this.$('#start').addClass('icon-start').removeClass('icon-stop');

      this.timer.reset();
    },
    openProjectList : function (e) {
      e.preventDefault();
      this.$('#projectPicker').fadeIn();
    },
    closeProjectList : function (e) {
      e.preventDefault();
      this.$('#projectPicker').fadeOut();
    },
    selectProject : function (e) {
      e.preventDefault();
      var project = $(e.target).text();
      if (project.length > 26) {
          project = project.substring(0, 23).concat('...');
      }
      this.$('#project').text(project);
      this.$('#projectPicker').fadeOut();
    },
    newProject : function (e) {
      e.preventDefault();
      this.$('#newProject').addClass('show');
    },
    saveProject : function (e) {
      e.preventDefault();
      var project = $('#newProjectName').val();
      var temp = project;
      if (project.length > 26) {
        project = project.substring(0, 23).concat('...');
      }
      var tpl = "<li><a class='project' href='#'>{0}</a></li>"
      this.$('#projects').append(tpl.replace('{0}', temp));
      this.$('#project').text(project);
      this.$('#projectPicker').hide();
      this.$('#newProject').removeClass('show');
      $('#newProjectName').val('');
    },
    lookupProject : function (e) {
      e.preventDefault();
      var $input = $(e.target);
      var text = $input.val().toLowerCase();
      var $projects = $('a.project');
      $projects.hide();
      $projects.each(function(index, project) {
        var $project = $(project);
        var projectContent = $project.text().toLowerCase();
        if (projectContent.indexOf(text) > -1) {
          $project.show();
        }
      });
    },
    verifyValue : function (e) {
      e.preventDefault();
      var $input = $('#description');

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

$(document).on('ready', function () {
  new CreateTaskView();
});

