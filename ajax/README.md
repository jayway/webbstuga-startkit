# AJAX and modules

## Cross-origin requests

Due to security concerns modern browsers disallow cross-origin requests by
default. There are a couple ways to solve this...

You need to run this in Chrome/Chromium with `--disable-web-security`,
like this:

    google-chrome --disable-web-security
    # or
    chromium --disable-web-security

**Chrome/Chromium can't already be opened when you run this command for it to
take effect.**

Templates are inlined in `index.html`. Edit `main.js` to get started.

This exaxmple supports routing, using
[director.js](https://github.com/flatiron/director).

Stubbed JSON API responses are stored as files in `/api/`.
