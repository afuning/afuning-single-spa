
# 本地部署环境
```
// 若未安装lerna，全局安装
npm install lerna -g
```
# 安装依赖
```
lerna bootstrap
```
# 本地启动
```
// 启动所有子项目
lerna run dev --stream
// 启动部分子项目
lerna run --scope main dev --stream
```
# 打包
```
未完待续
```