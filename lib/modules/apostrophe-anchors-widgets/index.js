module.exports = {
  improve: 'apostrophe-widgets',
  beforeConstruct: function (self, options) {
    if (options.anchors !== false) {
      var help = 'This value is used as an ID and is wrapped around the widget markup. ';
      if (options.anchorDefault) {
        help += 'If no anchor is set, this value will default to the sluggified version of ' + options.anchorDefault;
      }
      options.addFields = [{
        type: 'string',
        name: 'anchorId',
        label: 'Anchor ID',
        help: help
      }].concat(options.addFields || []);

      options.arrangeFields = (options.arrangeFields || []).concat([{
        label: 'Anchor',
        name: 'anchor',
        fields: ['anchorId'],
        last: true
      }]);
    }
  },

  construct: function (self, options) {
    // Super'ing the sanitize method as a way of inserting a default anchor value
    // if requested by widget module's configuration.
    // This will not overwrite existing values, even if the anchorDefault field changes 
    var superSanitize = self.sanitize;
    self.sanitize = function (req, input, callback) {
      if (options.anchorDefault && options.anchors !== false) {
        var def = options.anchorDefault;
        if (input[def] && !input.anchorId) {
          input.anchorId = self.apos.utils.slugify(input[def]);
        }
      }
      return superSanitize(req, input, function (err, output) {
        if (err) {
          return callback(err);
        }
        return callback(null, output);
      });
    };
  }
};