'use strict';

const projections = require('./epsgnames.json');

const byEpsg = {};
for (const [name, code] of Object.entries(projections)) {
    byEpsg[code] = name;
}

function search(name) {
    const epsgMatch = name.match(/.*\(?epsg:([0-9]*)\)?.*/i);
    if (epsgMatch) {
        return parseInt(epsgMatch[1], 10);
    }

    name = name.toLowerCase().replace('wgs84', 'wgs 84');
    const pattern = new RegExp('.*' + name.replace(/ /g, '.*') + '.*');

    for (const [projName, code] of Object.entries(projections)) {
        if (pattern.test(projName.toLowerCase())) {
            return code;
        }
    }

    return null;
}

module.exports = { projections, byEpsg, search };
