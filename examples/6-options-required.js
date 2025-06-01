const commander = require("commander")
const program = new commander.Command()

program.requiredOption("-c, --cheese <type>", "pizza must have cheese")

program.parse()

console.log(`Cheese type: ${program.opts().cheese}`)

// Try the following:
//    node options-required.js
//    node options-required.js --cheese blue
