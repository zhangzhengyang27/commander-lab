# Commander Lab

一个基于 Commander.js 的命令行工具实验项目，包含多个示例演示如何使用 Commander.js 的各种功能。

## 安装

确保已安装 [pnpm](https://pnpm.io/) 包管理器，然后运行：

```bash
pnpm install
```

## 使用示例

项目包含多个示例文件，演示 Commander.js 的不同功能：

```bash
node examples/1-split.js
node examples/2-string-util.js
# 其他示例文件类似...
```

## 项目结构

- `examples/` - 包含 20 个 Commander.js 使用示例
  - `1-split.js` - 基本命令分割示例
  - `2-string-util.js` - 字符串工具示例
  - ...其他示例文件
- `package.json` - 项目配置和依赖

## 依赖

- [Commander.js](https://github.com/tj/commander.js) v14.0.0+ - 完整的 Node.js 命令行解决方案

## 注意事项

- 项目入口文件(index.js)尚未实现
- 每个示例文件都是独立的，可以直接运行
