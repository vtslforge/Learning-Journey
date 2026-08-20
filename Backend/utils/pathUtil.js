const path = require('path')
module.exports = path.dirname(require.main.filename)

// basically gets the root directory of your main Node.js file and exports it.