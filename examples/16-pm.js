const { Command } = require("commander")
const program = new Command()

// 这是一个将子命令实现为独立可执行文件的示例。
// 当调用 `.command()` 并传入描述参数时，
// 这相当于告诉 Commander 你将使用独立的可执行文件来实现该子命令。
//
// 目前只实现了 `install` 和 `list` 命令，
// 具体实现请参见 pm-install 和 pm-list.js 文件

program
  .name("pm")
  .version("0.0.1")
  .description("Fake package manager")
  .command("install [package-names...]", "install one or more packages")
  .alias("i")
  .command("search [query]", "search with optional query")
  .alias("s")
  .command("update", "update installed packages", {
    executableFile: "myUpdateSubCommand"
  })
  .command("list", "list packages installed", { isDefault: true })

program.parse(process.argv)

// Try the following:
//    node pm
//    node pm help install
//    node pm install -h
//    node pm install foo bar baz
//    node pm install foo bar baz --force
