const { program } = require("commander")

program.option("--first").option("-s, --separator <char>").argument("<string>")

program.parse()

const options = program.opts()
const limit = options.first ? 1 : undefined
console.log(program.args[0].split(options.separator, limit))

// Try the following:
//    node split -s / --fits a/b/c   报错
//    node split -s / --first a/b/c  输出：["a"]
//    node split --separator=, a,b,c 输出：["a", "b", "c"]
