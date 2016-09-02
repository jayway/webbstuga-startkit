# Backbone Dropdown

Here, we connect a few different concepts to build a more realistic scenario: Backbone Views, AJAX, and Promises.

## The exercise

When adding an item in this app you should be able to pick a *Priority*.

*This exercise is not supposed to actually save anything, the view Javascript and form rendering is the focus.*

- Add API calls and rendering to `js/views/addItemView.js` so that the `<select>` contains the priority options.

- Convert the jQuery promises to A+ using Q. More information on how [here](https://github.com/kriskowal/q/wiki/Coming-from-jQuery#converting-jquery-promises-to-q). The reason for this is to use a *Promise A+* compliant library, like Q. jQuery has some stuff that we could use but its promises [are broken](http://thewayofcode.wordpress.com/2013/01/22/javascript-promises-and-why-jquery-implementation-is-broken/). Let's not mess around with broken stuff more than we have to.

- Use the `App.api.getUserSettings` to obtain the user settings and use the `defaultPriority` field to preselect that priority in the form. This requiries you to load **both** the priorities and the settings before rendering the form. Have a look at [Q.all](https://github.com/kriskowal/q#combination).

## Next Exercise

The next exercises will focus on common real-world problems. Some of these are problems that other libraries solve in a better way that Backbone, but we still think it's important that you know how these problems are solved without more modern libraries than Backbone.

[`backbone-nested-dropdown`](../backbone-nested-dropdown)
