<!--
 * @Author: liqkm liqkm@yonyou.com
 * @Date: 2024-05-29 17:31:30
 * @LastEditors: liqkm liqkm@yonyou.com
 * @LastEditTime: 2024-05-29 17:32:29
 * @FilePath: \bitfileupload\ReadMe.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
大文件上传知识点：
来源：抖音小满 2024-3-19
1. 上传文件时，需要将文件切分成多个小文件，然后上传小文件，最后将多个小文件拼接成一个大文件。

其他知识点：
    http-server 启动本地前端服务 npm i http-server -g

    启动前端html服务：
    http-server -p 8080

    后端服务使用：
    nodemon index.js 启动服务

    直接运行html文档的话是使用的File协议，当发http请求时会报跨域，所以需要用http-server来启动前端的服务

    .http文件的运行需要vscode安装插件  REST Client 