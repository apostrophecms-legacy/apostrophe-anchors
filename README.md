# ⛔️ **DEPRECATED** — do not use for new projects

See [our current docs](https://docs.apostrophecms.org/)

# apostrophe-anchors

An `improve` module that adds an ID wrapper around `apostrophe-widgets`, useful for navigating to widgets via anchors.

## Options

### Use an existing schema field as a default value for the anchor
Pass `anchorDefault: MY-SCHEMA-STRING-FIELD-NAME` as part of your widget configuration. This will default back to a slugified version of the given field's value. In the case of `anchordId` already having a value, it will not be overwritten. If given default field is empty, don't try to assign a value.
```javascript
  // app.js
  // .. other configuration
  'artwork-widgets':{
    extend: 'apostrophe-pieces-widgets',
    anchorDefault: 'title' // existing string field on the widget
  },
```

### Disable anchor fields for particular widget
Pass `anchors: false` as part of your widget configuration.
```javascript
  // app.js
  // .. other configuration
  'artwork-widgets':{
    extend: 'apostrophe-pieces-widgets',
    anchors: false
  },
```

### Custom attribute in the markup
This would be useful if doing custom front-end behavior. The default attribute is `id`.

```javascript
  // app.js
  // .. other configuration
  'apostrophe-anchors-widgets': {
    anchorsAttribute: 'data-override'
  }
```
The above will wrap your widget in `<div class="apos-area-widget-wrapper ui-draggable" data-apos-widget-wrapper="image" data-override="MY-VALUE">`