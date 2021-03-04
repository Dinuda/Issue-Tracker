const fs = require('fs')

const getIssues = function () {
    console.log("Your Issues: ");
}

// Load all the notes
const loadIssues = function () {
    try {
        const dataBuffer = fs.readFileSync('../data/issues.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Export the functions to the main file(app.js)
module.exports = {
    getIssues: getIssues,
    loadIssues: loadIssues
}