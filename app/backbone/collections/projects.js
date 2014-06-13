var $ = require('jquery');
var Backbone = require('backbone');
var Project = require('../models/project');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  model : Project
});