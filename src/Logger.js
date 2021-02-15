'use strict'

const ElasticClient = require('./DbClients/ElasticClient')
const Logs = require('./Logs')
const DbTypes = require('./DbTypes')

class Logger {
    dbClient
    creator

    constructor(dbType, host, storeName, creator) {
        this.creator = creator
        this.setDbClient(dbType, host, storeName)
    }

    setDbClient(dbType, host, storeName) {
        switch (dbType) {
            case DbTypes.ELASTIC_SEARCH:
                this.dbClient = new ElasticClient(host, storeName)
                break
            default:
                throw Error(`choose db to use: ${DbTypes}`)
        }
    }

    async addCrawlerLog(subType, attributes) {
        const log = new Logs.LogCrawler(subType, attributes, this.creator)
        await this.dbClient.writeToDb(log)
    }

    async addErrLog(subType, attributes) {
        const log = new Logs.LogError(subType, attributes, this.creator)
        await this.dbClient.writeToDb(log)
    }

    async addSearchLog(subType, attributes) {
        const log = new Logs.LogSearch(subType, attributes, this.creator)
        await this.dbClient.writeToDb(log)
    }

    async addBalancerLog(subType, attributes) {
        const log = new Logs.LogBalancer(subType, attributes, this.creator)
        await this.dbClient.writeToDb(log)
    }

    async addAgentLog(subType, attributes) {
        const log = new Logs.LogAgent(subType, attributes, this.creator)
        await this.dbClient.writeToDb(log)
    }

    async addMinerLog(subType, attributes) {
        const log = new Logs.LogMiner(subType, attributes, this.creator)
        await this.dbClient.writeToDb(log)
    }
}

module.exports = Logger
