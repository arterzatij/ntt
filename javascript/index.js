CreateTaskView = Backbone.View.extend({
	events : {
		'click #project'  : 'openProjectList',
		'click #close'    : 'closeProjectList',
		'click a.project' : 'selectProject'
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
    }
});

$(document).on('ready', function () {
	new CreateTaskView();
});