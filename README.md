# kerouac-cname

[![Version](https://img.shields.io/npm/v/kerouac-cname.svg?label=version)](https://www.npmjs.com/package/kerouac-cname)
[![Build](https://img.shields.io/travis/jaredhanson/kerouac-cname.svg)](https://travis-ci.org/jaredhanson/kerouac-cname)
[![Quality](https://img.shields.io/codeclimate/github/jaredhanson/kerouac-cname.svg?label=quality)](https://codeclimate.com/github/jaredhanson/kerouac-cname)
[![Coverage](https://img.shields.io/coveralls/jaredhanson/kerouac-cname.svg)](https://coveralls.io/r/jaredhanson/kerouac-cname)
[![Dependencies](https://img.shields.io/david/jaredhanson/kerouac-cname.svg)](https://david-dm.org/jaredhanson/kerouac-cname)


[Kerouac](https://github.com/jaredhanson/kerouac) middleware that generates
a CNAME file for use with [GitHub Pages](https://pages.github.com/).

## Install

    $ npm install kerouac-cname
    
## Usage

First, set the `base url` setting for your site.

```js
site.set('base url', 'http://www.example.com/');
```

Then declare a `CNAME` page, using this middleware.

```js
site.page('/CNAME', require('kerouac-cname')());
```

The generated output will include a `/CNAME` resource, containing your site's
hostname.  This can be used when hosting your site with GitHub Pages and using
a custom domain.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>


