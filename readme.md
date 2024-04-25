打包的时候自定义一个属性

项目启动打包会报一个错,

```
package subpath './package.json' is not defined by "exports" in D:\githupprojects\study\vue3-write\node_modules\tslib\package.json
```

是因为 node*modules 下面的 tslib 包问题,在 tslib 包中的 package.json 文件下的 exports 对象的最后一行添加 "./*": "./\*" 就可以了
完整的 exports 代码

```
"exports": {
        ".": {
            "module": "./tslib.es6.js",
            "import": "./modules/index.js",
            "default": "./tslib.js"
        },
        "./": "./",
        "./*": "./*"
    }
```
