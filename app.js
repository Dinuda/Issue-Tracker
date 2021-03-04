// Package Imports
const yargs = require('yargs')

// Service Imports
const list = require('./service/list')

// Version Control
yargs.version('1.1.0')

yargs.command({
    command: 'list',
    description: 'List all issues',
    handler: function () {
        list.loadIssues()
    }
})

console.log(yargs.argv);
