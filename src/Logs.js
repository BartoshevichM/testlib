'use strict'

const LogTypes = require('./LogTypes')

class Log {
    type = 'LOG'
    attributes
    date = Date.now()
    subType
    creator

    constructor(subType, attributes, creator) {
        this.subType = subType
        this.attributes = attributes
        this.creator = creator
    }
}

class LogError extends Log {
    type = LogTypes.ERROR

    constructor(subType, attributes, creator) {
        super(subType, attributes, creator)
    }
}

class LogCrawler extends Log {
    type = LogTypes.CRAWLER

    constructor(subType, attributes, creator) {
        super(subType, attributes, creator)
    }
}

class LogSearch extends Log {
    type = LogTypes.SEARCH

    constructor(subType, attributes, creator) {
        super(subType, attributes, creator)
    }
}

class LogBalancer extends Log {
    type = LogTypes.SEARCH

    constructor(subType, attributes, creator) {
        super(subType, attributes, creator)
    }
}

class LogAgent extends Log {
    type = LogTypes.AGENT

    constructor(subType, attributes, creator) {
        super(subType, attributes, creator)
    }
}

class LogMiner extends Log {
    type = LogTypes.MINER

    constructor(subType, attributes, creator) {
        super(subType, attributes, creator)
    }
}


module.exports = { LogCrawler, LogBalancer, LogError, LogSearch, LogAgent, LogMiner }
