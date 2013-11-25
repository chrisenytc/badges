/*
 * badges
 * https://github.com/enytc/badges
 *
 * Copyright (c) 2013 Christopher EnyTC
 * Licensed under the BSD license.
 */

'use strict';

//Create App
window.Bella = Ember.Application.create({
  rootElement: '#container',
});

//RestURL
Bella.Router.reopen({
  location: 'history'
});

//Define Routes
Bella.Router.map(function() {
  this.route('gh', {path: '/for/gh'});
  this.route('npm', {path: '/for/npm'});
  this.route('gem', {path: '/for/gem'});
  this.route('bower', {path: '/for/bower'});
  this.route('about', {path: '/about'});
  this.route('api', {path: '/about/api'});
  this.route('contributors', {path: '/about/contributors'});
});

//Define Contributors Route
Bella.ContributorsRoute = Ember.Route.extend({
  setupController: function(controller) {
    //Get Contributors
    $.getJSON('https://api.github.com/repos/enytc/badges/contributors').done(function(data) {
        controller.set('status', true);
        controller.set('contributors', data);
    });
  }
});

//Define Controllers
Bella.GhController = Ember.Controller.extend({
  packageName: '',
  username: '',
  exists: false,
  data: {},

  actions: {
    query: function() {
      //Get Params
      var packageName = this.get('package');
      var username = this.get('username');
      var self = this;
      //Loading
      $('#search-cat').hide();
      $('#loading-box').show();
      //Get
      socket.get('/api/gh',{
        package: packageName,
        username: username
      }, function (response) {
        //Loading
        $('#loading-box').hide();
        $('#search-cat').hide();
        self.set('exists', response.exists);
        self.set('data', response);
      });
    }
  }
});

//
Bella.NpmController = Ember.Controller.extend({
  packageName: '',
  exists: false,
  data: {},

  actions: {
    query: function() {
      var packageName = this.get('package');
      var username = this.get('username');
      var self = this;
      //Loading
      $('#search-cat').hide();
      $('#loading-box').show();
      //Get
      socket.get('/api/npm',{
        package: packageName
      }, function (response) {
        //Loading
        $('#loading-box').hide();
        self.set('exists', response.exists);
        self.set('data', response);
      });
    }
  }
});

//
Bella.GemController = Ember.Controller.extend({
  packageName: '',
  exists: false,
  data: {},

  actions: {
    query: function() {
      var packageName = this.get('package');
      var self = this;
      //Loading
      $('#search-cat').hide();
      $('#loading-box').show();
      //Get
      socket.get('/api/gem',{
        package: packageName
      }, function (response) {
        //Loading
        $('#loading-box').hide();
        self.set('exists', response.exists);
        self.set('data', response);
      });
    }
  }
});

//
Bella.BowerController = Ember.Controller.extend({
  packageName: '',
  username: '',
  exists: false,
  data: {},

  actions: {
    query: function() {
      var packageName = this.get('package');
      var username = this.get('username');
      var self = this;
      //Loading
      $('#search-cat').hide();
      $('#loading-box').show();
      //Get
      socket.get('/api/bower',{
        package: packageName,
        username: username
      }, function (response) {
        //Loading
        $('#search-cat').hide();
        $('#loading-box').hide();
        self.set('exists', response.exists);
        self.set('data', response);
      });
    }
  }
});

//
Bella.ContributorsController = Ember.Controller.extend({
  status: false,
  contributors: {},
  actions: {
  }
});
