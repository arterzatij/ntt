var $ = require('jquery');
var Backbone = require('backbone');
var Client = require('../models/client');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  model : Client
});