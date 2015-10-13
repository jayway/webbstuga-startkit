# AJAX with Promises

As you might have noticed the AJAX requests we have done have all returned
something on which we can call `.done` with a callback. This is a [jQuery
Promise](http://api.jquery.com/Types/#Promise), an abstraction for a value
that might be available in the future.

Some advantages of using Promise instead of callbacks are that we have
the asynchronous result as a first class value - it's *reified* - and
that the Promise deals with both success and failure in a simpler way
than callbacks. When using a callback you have to check if the first argument
(the error argument) is non-null and do an early exit of some sort. With
Promise you can use the distinct functions `done` and `fail` to handle the
success and failure cases respectively.

```javascript
// Get a Promise
var items = App.api.getItemList();
// Create a new Deferred (superset of Promise)
var count = $.Deferred();
// When we have the final result render it to the DOM.
count.done(function (c) {
    var template = $("#item-count-template").text();
    var rendered = _.template(template, {count: c});
    $(".template-container").html(rendered);
});
// Resolve the count Deferred with the length of all items.
items.done(function (response) {
    count.resolve(response.items.length);
});
```

## Description

This exercise is comes with a fairly tricky task: to be able to filter out
completed or in-progress items in [api.js](js/api.js). As a bonus you could
add buttons that toggle the filters *All*, *Completed* and *In Progress*.

## Promises/A+

The original jQuery Promise is actually considered broken to some extent, and
replaced by the [Promises/A+](https://promisesaplus.com/) standard. The jQuery
Promise has since version 1.8 implemented the standard as well. The previous
example, using Promises/A+, could have looked more like:

```javascript
// Get a Promise
App.api.getItemList()
  // Transform to the count of all items.
  .then(function (response) {
      return response.items.length;
  });
  // Render the final result to the DOM.
  .then(function (count) {
      var template = $("#item-count-template").text();
      var rendered = _.template(template, {count: count});
      $(".template-container").html(rendered);
  });
```

Try rewriting you code using `.then` instead of `.done`.

## Next Exercise

**You've completed Part 1!**

Next is [`backbone`](backbone).
