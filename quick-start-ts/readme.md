##typings

> 很多库—— jQuery 、 Jasmine 和 Lodash 等库——都 没有 在它们自己的 npm 包中包含 d.ts 文件
> typings 的工具可以为我们找到并获取这些文件。
> 执行命令 typings install 


## css

> webpack打包
> 先采用raw-loader解析组件局部样式 ( 就是在组件元数据的 styleUrls 属性中指定的那些 ) 
> 再采用style-loader, css-loaderx解析应用级样式


## webpack打包时传入参数

> ENV = process.env.NODE_ENV = process.env.ENV = 'production'
> 
> 命令行 例： NODE_ENV=production webpack --config file -d
> 在 file 文件中可通过 process.env.NODE_ENV 访问到传入的参数为 production
