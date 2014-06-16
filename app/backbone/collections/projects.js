var $ = require('jquery'),
    Backbone = require('backbone'),
    Project = require('../models/project');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  model : Project
});