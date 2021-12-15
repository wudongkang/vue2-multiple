# 代码管理：

    项目分支分别有：master ，dev , test 三个和各自的功能分支

    创建分支流程规范  ：master 生产分支  -〉dev开发主分支 -〉 test 是dev拉出来的测试分支  

    各需求功能分支从 DEV分支中check。

    开发完成后：功能分支 -〉 test分支 -〉DEV（预上线环境） -〉master （腾讯云环境）
    
    （比如dev/ocr,开发ocr需求的分支，开发联调完成合并到test分支提测。提测通过后合并到dev主分支，
    再申请合并到master，发版版本号+1然后master发版。）
    
    如果分支时间太长，在分支开发的同学及时从dev主分支同步代码到自己开发的分支，保持最新和最小冲突。
    
# 项目打包方式：
## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```


# 目录结构说明：




# 用到的框架说明：
## 组件列表

1. vue-router
2. element-ui
3. axios


