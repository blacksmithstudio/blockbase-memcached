# Driver Memcached for Blockbase
Compatible with Blockbase Framework

### Version
0.0.1 alpha

### How to install ?
Memcached driver is really easy to use, first install it as any Blockbase driver.

```shell
$ npm i --save @blacksmithstudio/blockbase-memcached
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

(Copyright) 2017 - Alexandre Pereira for Blacksmith S.A.S.


**Free Software, Hell Yeah!**

[Node.js]:https://nodejs.org/en
[NPM]:https://www.npmjs.com
