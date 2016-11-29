


* typings.json： [TypeScript类型定义管理器](https://github.com/typings/typings)

> typings install env~node dt~core-js --global --save


* tsconfig.json： [TypeScript编译配置](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* webpack.json说明

> polyfills - 我们在大多数现代浏览器中运行Angular程序时需要的标准填充物。

> vendor - 我们需要的提供商文件：Angular、Lodash、bootstrap.css……

> app - 我们的应用代码。

> webpack.optimize.CommonsChunkPlugin: 将entry编译后的文件拆分成三个js文件
> new webpack.optimize.CommonsChunkPlugin({
>    name: ['app', 'vendor', 'polyfills']
>  }),这里标记出了三个块之间的等级体系：app -> vendor -> polyfills。 当Webpack发现app与vendor有共享依赖时，就把它们从app中移除。

> awesome-typescript-loader: 一个用于把TypeScript代码转译成ES5的加载器，它会由tsconfig.json文件提供指导

> angular2-template-loader: 用于加载Angular组件的模板和样式

> html: 为组件模板准备的加载器

> raw: 匹配组件局部样式(就是在组件元数据的styleUrls属性中指定的那些)

> ExtractTextPlugin: It moves every require("style.css") in entry chunks into a separate css output file. So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css).
>

* core-js: Modular standard library for JavaScript. Includes polyfills for ECMAScript 5, ECMAScript 6: promises, symbols, collections, iterators, typed arrays, ECMAScript 7+ proposals, setImmediate, etc. Some additional features such as dictionaries or extended partial application. You can require only needed features or use it without global namespace pollution.
* rxjs: reactive extensions js版本
* zone.js:A Zone is an execution context that persists across async tasks. You can think of it as thread-local storage for JavaScript VMs.
* reflect-metadata: 引入 reflect-metadata 库来使用元数据反射 API



* 编译命令 npm run build
* 启动服务器命令  npm run start
