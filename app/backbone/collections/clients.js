var $ = require('jquery'),
    Backbone = require('backbone'),
    Client = require('../models/client');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  model : Client
});