var $ = require('jquery'),
    Backbone = require('backbone'),
    swig = require('swig'),
    Projects = require('../collections/projects'),
    Clients = require('../collections/clients');

Backbone.$ = $;

module.exports = Backbone.View.extend({

  initialize : function () {
    var self = this;

    this.template = swig.compile($('#projectElement_tpl').html());

    collections.clients = new Clients();

    collections.projects = new Projects();
    collections.projects.on('add', function (project) {

      var client = collections.clients.findWhere({
        id : project.get('client_id')
      });

      var projectElement = self.template({
        client : client.get('name'),
        project : project.get('name')
      });

      self.$('ul.projects').append(projectElement);
    });
  },

  render : function () {
    collections.clients.add(this.model.get('clients'));
    collections.projects.add(this.model.get('projects'));
  },
  
  events : {
    'keyup input.term' : 'lookupProject'
  },

  lookupProject : function (e) {
    e.preventDefault();

    var $input = $(e.target);
    var $projects = $('a.project');
    var term = $input.val().toLowerCase();
    
    $projects.hide();

    $projects.each(function (index, project) {
      var $project = $(project);

      var projectContent = $project.text().toLowerCase();
      if (projectContent.indexOf(term) > -1) {
        $project.show();
      }
    });
  }
});