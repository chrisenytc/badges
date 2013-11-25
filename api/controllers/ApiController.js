/**
 * ApiController
 *
 * @module      :: Controller
 * @description  :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

/*
* Module dependencies
*/

var gngb = require('gngb-api');

module.exports = {


  /**
   * Action blueprints:
   *    `/api/gh/:username/:id`
   */
   gh: function (req, res) {

     var id = req.param('id').replace(/.png$/, '');
     var username = req.param('username');

    // Send a Image response
    return gngb.createBadge(res, 'gh', id, username);
  },


  /**
   * Action blueprints:
   *    `/api/npm/:id`
   */
   npm: function (req, res) {

    var id = req.param('id').replace(/.png$/, '');
     var username = '';

    // Send a Image response
    return gngb.createBadge(res, 'npm', id, username);
  },


  /**
   * Action blueprints:
   *    `/api/gem/:id`
   */
   gem: function (req, res) {

    var id = req.param('id').replace(/.png$/, '');
    var username = '';

    // Send a Image response
    return gngb.createBadge(res, 'gem', id, username);
  },


  /**
   * Action blueprints:
   *    `/api/bower/:id`
   */
   bower: function (req, res) {

    var id = req.param('id').replace(/.png$/, '');
    var username = req.param('username');

    // Send a Image response
    return gngb.createBadge(res, 'bower', id, username);
  },

  /**
   * Action blueprints:
   *    `/api/gh`
   */
   forGh: function (req, res) {
    // Get Params
     var package = req.param('package');
     var username = req.param('username');
     //Models
     var models = {
      url: "http://badges.enytc.com/for/gh/:username/:package",
      image: "https://badge-me.herokuapp.com/api/gh/:username/:package.png",
      markdown: "[![GH version](:image)](:url)",
      textile: "!:image!::url",
      rdoc: '{<img src=":image" alt="GH version" />}[:url]',
      asciidoc: 'image::image["GH version", link=":url"]',
    };
     //Image
     var url = models.url.replace(/:username/g, username).replace(/:package/g, package);
     var image = models.image.replace(/:username/g, username).replace(/:package/g, package);
     var markdown = models.markdown.replace(/:image/g, image).replace(/:url/g, url);
     var textile = models.textile.replace(/:image/g, image).replace(/:url/g, url);
     var rdoc = models.rdoc.replace(/:image/g, image).replace(/:url/g, url);
     var asciidoc = models.asciidoc.replace(/:image/g, image).replace(/:url/g, url);


     var data = {
      image: image,
      markdown: markdown,
      textile: textile,
      rdoc: rdoc,
      asciidoc: asciidoc
    };
    // Send a JSON response
     return gngb.checkPackage(res, data, 'gh', package, username);
  },


  /**
   * Action blueprints:
   *    `/api/npm`
   */
   ForNpm: function (req, res) {
     // Get Params
     var package = req.param('package');
     //Models
     var models = {
      url: "http://badges.enytc.com/for/npm/:package",
      image: "https://badge-me.herokuapp.com/api/npm/:package.png",
      markdown: "[![NPM version](:image)](:url)",
      textile: "!:image!::url",
      rdoc: '{<img src=":image" alt="NPM version" />}[:url]',
      asciidoc: 'image::image["NPM version", link=":url"]',
    };
     //Image
     var url = models.url.replace(/:package/g, package);
     var image = models.image.replace(/:package/g, package);
     var markdown = models.markdown.replace(/:image/g, image).replace(/:url/g, url);
     var textile = models.textile.replace(/:image/g, image).replace(/:url/g, url);
     var rdoc = models.rdoc.replace(/:image/g, image).replace(/:url/g, url);
     var asciidoc = models.asciidoc.replace(/:image/g, image).replace(/:url/g, url);


     var data = {
      image: image,
      markdown: markdown,
      textile: textile,
      rdoc: rdoc,
      asciidoc: asciidoc
    };
    // Send a JSON response
     return gngb.checkPackage(res, data, 'npm', package, '');
  },


  /**
   * Action blueprints:
   *    `/api/gem`
   */
   ForGem: function (req, res) {
     // Get Params
     var package = req.param('package');
     //Models
     var models = {
      url: "http://badges.enytc.com/for/gem/:package",
      image: "https://badge-me.herokuapp.com/api/gem/:package.png",
      markdown: "[![GEM version](:image)](:url)",
      textile: "!:image!::url",
      rdoc: '{<img src=":image" alt="GEM version" />}[:url]',
      asciidoc: 'image::image["GEM version", link=":url"]',
    };
     //Image
     var url = models.url.replace(/:package/g, package);
     var image = models.image.replace(/:package/g, package);
     var markdown = models.markdown.replace(/:image/g, image).replace(/:url/g, url);
     var textile = models.textile.replace(/:image/g, image).replace(/:url/g, url);
     var rdoc = models.rdoc.replace(/:image/g, image).replace(/:url/g, url);
     var asciidoc = models.asciidoc.replace(/:image/g, image).replace(/:url/g, url);


     var data = {
      image: image,
      markdown: markdown,
      textile: textile,
      rdoc: rdoc,
      asciidoc: asciidoc
    };
    // Send a JSON response
     return gngb.checkPackage(res, data, 'gem', package, '');
  },


  /**
   * Action blueprints:
   *    `/api/bower`
   */
   forBower: function (req, res) {
    // Get Params
     var package = req.param('package');
     var username = req.param('username');
     //Models
     var models = {
      url: "http://badges.enytc.com/for/bower/:username/:package",
      image: "https://badge-me.herokuapp.com/api/bower/:username/:package.png",
      markdown: "[![BOWER version](:image)](:url)",
      textile: "!:image!::url",
      rdoc: '{<img src=":image" alt="BOWER version" />}[:url]',
      asciidoc: 'image::image["BOWER version", link=":url"]',
    };
     //Image
     var url = models.url.replace(/:username/g, username).replace(/:package/g, package);
     var image = models.image.replace(/:username/g, username).replace(/:package/g, package);
     var markdown = models.markdown.replace(/:image/g, image).replace(/:url/g, url);
     var textile = models.textile.replace(/:image/g, image).replace(/:url/g, url);
     var rdoc = models.rdoc.replace(/:image/g, image).replace(/:url/g, url);
     var asciidoc = models.asciidoc.replace(/:image/g, image).replace(/:url/g, url);

     var data = {
      image: image,
      markdown: markdown,
      textile: textile,
      rdoc: rdoc,
      asciidoc: asciidoc
    };
    // Send a JSON response
     return gngb.checkPackage(res, data, 'bower', package, username);

  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ApiController)
   */
  _config: {}


};
