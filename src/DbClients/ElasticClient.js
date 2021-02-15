'use strict'

const { Client } = require( '@elastic/elasticsearch')

class ElasticClient {
    constructor(host, storeName) {
        this.index = storeName
        this.client = new Client({node: host})
    }

    writeToDb(body) {
        return this.client
            .index({index: this.index, body})
            .then(res => res)
            .catch(e => e)
    }
}

module.exports = ElasticClient
