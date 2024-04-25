// monerepo 打包
// 1 获取打包目录

const fs = require('fs');
const execa = require('execa');
const dirs = fs.readdirSync('packages').filter((p) => {
  if (!fs.statSync(`packages/${p}`).isDirectory()) {
    return false;
  }
  return true;
});

async function build(target) {
  console.log('target :>> ', target);
  // 注意 execa -c 执行rollup配置，环境变量 -env
  await execa('rollup', ['-c', '--environment', `TARGET:${target}`], { stdio: 'inherit' });
}

// 2 进行打包 并行打包
async function runParaller(dirs, fn) {
  // 遍历
  let result = [];
  for (let item of dirs) {
    result.push(fn(item));
  }
  return Promise.all(result); // 存放打包的promise，等待打包完毕，调用成功
}

// promise
runParaller(dirs, build).then(() => {
  console.log('success :>> ', success);
});
// 注意 文件夹才打包
console.log(dirs);
