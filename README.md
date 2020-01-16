# 未完待续
# 基于single-spa的微前端

vue + element

# 准备工作

## 安装

```
// 全局安装lerna
npm install lerna -g
// 安装所有依赖
lerna bootstrap
```

## 启动开发环境

```
// 启动全部
lerna run dev --stream
// 启动部分
lerna run --scope package_name dev --stream
```

## 注意

- 路由匹配先匹配微前端路由，再匹配vue-router路由