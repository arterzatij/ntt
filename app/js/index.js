var TimeFormat = function (time) {

  // Value holder
  var _time = time;

  // Value to String method
  var v2s = function (value) {
    var strvalue = value.toString();
    return '00'.substring(strvalue.length)
               .concat(strvalue);
  };

  return {
    format : function () {
      // Time Array
      var tArray = [];

      tArray.push(v2s(_time.h));
      tArray.push(v2s(_time.m));
      tArray.push(v2s(_time.s));

      return tArray.join(':');
    }
  }
};

var Timer = function (input) {
  var $input = $(input),
      timer  = undefined,
      status = false,
      time   = { s : 1, m : 0, h : 0 };

  return {
    start : function () {
      if (!status) {
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
        status = true;
      }
    },
    stop  : function () {
      if (status) {
        clearInterval(timer);
        status = false;
      }
    }
  }
};

CreateTaskView = Backbone.View.extend({
    events : {
        'click #start'       : 'startTask',
        'click #start.stop'  : 'stopTask',
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
        this.$('#start').addClass('stop');
      } else {
        $input.addClass('error');
        $input.attr('placeholder', 'Please add a description!');
      }
    },
    stopTask : function (e) {
      e.preventDefault();
      this.timer.stop();
      this.$('#start').removeClass('stop');
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

