const Memcached = require('memcached')

/**
 * Blockbase Memcached driver (app.drivers.memcached)
 * @memberof app.drivers
 * @author Alexandre Pereira <alex@blacksmith.studio>
 * @param {Object} app - Application namespace
 *
 * @returns {Object} driver object containing public methods
 */
module.exports = (app) => {
    if(!app.config || !app.config.has('memcached'))
        return app.drivers.logger.error('Drivers', 'Can not init memcached, no valid config')

    return new Memcached(app.config.get('memcached').host)
}
