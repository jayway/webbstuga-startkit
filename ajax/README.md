# AJAX

In the previous examples we have had stub data available on the `window`
object. This is, as you might imagine, not always the case. You probably need
to fetch data from a database sooner or later. When writing a server-side
rendered web application the data to display can be rendered as HTML directly
on the server, but when doing a client side-only application like we are doing
here, the data needs to be fetched with Javascript. In the browser these types
of requests is usually called *AJAX*, short for *Asynchronous Javascript and
XML* (don't worry, XML is not required).

## Cross-Origin Requests

Due to security concerns modern browsers disallow cross-origin requests by
default. There are a couple ways to solve this...

You need to run this in Chrome/Chromium with `--disable-web-security`,
like this:

    google-chrome --disable-web-security
    # or
    chromium --disable-web-security

**Chrome/Chromium can't already be opened when you run this command for it to
take effect.**

## The Exercise

Templates are inlined in `index.html`. Edit `main.js` to get started.

This example supports routing, using
[director.js](https://github.com/flatiron/director).

Stubbed JSON API responses are stored as files in `/api/`.

## Next Exercise

[`ajax-modules-and-namespaces`](ajax-modules-and-namespaces)
