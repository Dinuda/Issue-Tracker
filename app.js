// Package Imports
const yargs = require('yargs')

// Version Control
yargs.version('1.1.0')

yargs.command({
    command: 'list .',
    describe: 'List all issues',
    handler: function () {
        // function
    }
})
