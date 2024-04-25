// 通过rollup打包

// 1 引入相关依赖
import ts from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import resolvePlugin from '@rollup/plugin-node-resolve';
import path from 'path';

// 2 获取文件路径
const packagesDir = path.resolve(__dirname, 'packages');

// 2.1 获取需要打包的包
const packageDir = path.resolve(packagesDir, process.env.TARGET);
// 2.2 打包获取每个项目的配置
const resolve = (p) => path.resolve(packageDir, p);
const pkg = require(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};

console.log('pkg :>> ', pkg);
