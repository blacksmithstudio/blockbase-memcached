# Driver Memcached for Blockbase
Compatible with Blockbase Framework

### Version
0.0.2

### How to install ?
Memcached driver is really easy to use, first install it as any Blockbase driver.

```shell
$ npm i --save blockbase-memcached
```

Then add to your config the host
```yml
memcached :
    host : localhost:11211
```

Feel free to also use the {env}.yml config file to store other memcached parameters such as a prefix for your keys in cache
```yml
memcached :
    prefix : mysuperapp-
    # etc ...
```

### Usage
You'll inherit the entire [https://www.npmjs.com/package/memcached](memcached library)
```js
method(){
    app.drivers.memcached.get('somekey', (data) => {
        // do whatever with data
    })

    //...
}
```

License
----
(Licence [MIT](https://github.com/blacksmithstudio/blockbase-express/blob/master/LICENCE))
Coded by [Blacksmith](https://www.blacksmith.studio)


**Free Software, Hell Yeah!**

[Node.js]:https://nodejs.org/en
[NPM]:https://www.npmjs.com
