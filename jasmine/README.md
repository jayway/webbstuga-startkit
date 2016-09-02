# Jasmine

As your applications grow you probably want to start writing tests. Jasmine
can be used to test at the Javascript level, checking that functions return
the correct values etc, but also to test at the UI level, i.e. that the
application renders the correct content.

*NOTE!* This is very powerful but can result in tests that are highly coupled
to the structure of rendered HTML, making the implementation hard to change
without breaking tests.

## The Exercise

This exercise uses Jasmine only (there is no other way to view the app) and
embeds templates inside the Jasmine [index.html](test/index.html).

Open `test/index.html` in Chrome to run the tests.

Try adding the features and test them against the DOM in [test.js](
test/spec/test.js).

## Links

http://jasmine.github.io/1.3/introduction.html

## Next Exercise(s)

* [`jasmine-in-memory-api`](../jasmine-in-memory-api) (optional)
* [`jquery-underscore-templates-inlined-and-routing`](../jquery-underscore-templates-inlined-and-routing)
