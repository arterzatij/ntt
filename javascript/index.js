CreateTaskView = Backbone.View.extend({
	events : {
		'click #project'     : 'openProjectList',
		'click #close'       : 'closeProjectList',
		'click a.project'    : 'selectProject',
		'click #createproj'  : 'newProject',
		'click #saveProject' : 'saveProject',
		'keyup #findProject' : 'lookupProject'
	},
 	initialize: function(){
    	this.$el = $('#createTask');
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
    }

});

$(document).on('ready', function () {
	new CreateTaskView();
});

