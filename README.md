#Express Group Routes Fork

This is a fork of [express-group-routes](https://www.npmjs.com/package/express-group-routes) by [dirkgroenen](https://www.npmjs.com/~dirkgroenen).

The modification that I made allow one argument to be passed to the route handler.

--------------------

##Quick start

If you want to prefix all routes with a certain URL you can use the `group` method as following: 

```javascript
var app = require('express')
require('express-group-routes')

app.group("/api/v1", (router) => {
    router.get("/login", loginController.store); // /api/v1/login 
})
```

If you need pass one argument to the route handler you can do this:

```javascript
var app = require('express')
app.set('database', () => {})
require('express-group-routes')

app.group((router) => {
    router.get("/login", loginController.store, app.get('database')); // loginController.store will have access to the database connection
})
```

In case you don't want to add a prefix but still need to group certain routes you can leave the first parameter and go straight for the function:

```javascript
var app = require('express')
require('express-group-routes')

app.group((router) => {
    router.use(middleware)
})
```

#License

MIT