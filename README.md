# apostrophe-anchor-widgets
Current status: WIP

An `improve` module that adds anchoring capability to existing `apostrophe-widgets`.

## TODOs

## Options

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
The default attribute is `id`.

```javascript
  // app.js
  // .. other configuration
  'apostrophe-anchors-widgets': {
    anchorsAttribute: 'data-override'
  }
```
The above will wrap your widget in `<div class="apos-area-widget-wrapper ui-draggable" data-apos-widget-wrapper="image" data-override="MY-VALUE">`
