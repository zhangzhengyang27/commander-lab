const { Command } = require("commander")
const program = new Command()

program.option("-f, --foo", "enable some foo")

program.addHelpText(
  "after",
  `

Example call:
  $ custom-help --help`
)

program.parse(process.argv)

// Try the following:
//    node custom-help --help
