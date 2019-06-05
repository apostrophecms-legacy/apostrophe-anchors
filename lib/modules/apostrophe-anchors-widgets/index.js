module.exports = {
  improve: 'apostrophe-widgets',
  beforeConstruct: function (self, options) {
    if (options.anchors !== false) {
      options.addFields = [{
        type: 'string',
        name: 'anchorId',
        label: 'Anchor ID',
      }].concat(options.addFields || []);

      options.arrangeFields = (options.arrangeFields || []).concat([{
        label: 'Anchor',
        name: 'anchor',
        fields: ['anchorId'],
        last: true
      }]);
    }
  },
  // construct: function (self, options) {
  // }
};