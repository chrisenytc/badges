/**
 * ForController
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

module.exports = {


  /**
   * Action blueprints:
   *    `/for/gh`
   */
   gh: function (req, res) {

    // Redirect to new route
    return res.view();
  },


  /**
   * Action blueprints:
   *    `/for/npm`
   */
   npm: function (req, res) {

    // Redirect to new route
    return res.view();
  },


  /**
   * Action blueprints:
   *    `/for/gem`
   */
   gem: function (req, res) {

    // Redirect to new route
    return res.view();
  },


  /**
   * Action blueprints:
   *    `/for/bower`
   */
   bower: function (req, res) {

    // Redirect to new route
    return res.view();
  },

  /**
   * Action blueprints:
   *    `/for/gh/:username/:package`
   */
   forGh: function (req, res) {
     //Get Params
     var username = req.param('username');
     var package = req.param('package');
     var model = 'https://github.com/:username/:package';
     var url = model.replace(/:username/g, username).replace(/:package/g, package);

    // Send redirect to url
    return res.redirect(url);
  },


  /**
   * Action blueprints:
   *    `/for/npm/:package`
   */
   forNpm: function (req, res) {
     //Get Params
     var package = req.param('package');
     var model = 'https://npmjs.org/package/:package';
     var url = model.replace(/:package/g, package);

    // Send redirect to url
    return res.redirect(url);
  },


  /**
   * Action blueprints:
   *    `/for/gem/:package`
   */
   forGem: function (req, res) {
     //Get Params
     var package = req.param('package');
     var model = 'https://rubygems.org/gems/:package';
     var url = model.replace(/:package/g, package);

    // Send redirect to url
    return res.redirect(url);
  },


  /**
   * Action blueprints:
   *    `/for/bower/:username/:package`
   */
   forBower: function (req, res) {
    //Get Params
     var username = req.param('username');
     var package = req.param('package');
     var model = 'https://github.com/:username/:package';
     var url = model.replace(/:username/g, username).replace(/:package/g, package);

    // Send redirect to url
    return res.redirect(url);
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ForController)
   */
  _config: {}


};
