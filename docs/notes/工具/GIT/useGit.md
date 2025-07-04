---
title: useGit
createTime: 2025/07/04 10:47:29
permalink: /tool/usegit/
---
# GIT有关概念
- 工作区：工作区可以理解为你的文件夹
- 暂存区：当修改后的文件add操作后即进入了暂存区
- 版本库：暂存区中的文件提交后（commit）后即进入了本地版本库，push后进入远程仓库


# GIT的使用

## 版本库的创建
### 什么是版本库?
版本库其实就是仓库。其实就相当于一个文件夹，只不过git将它管理了起来，该文件夹下的所有文件的新增、修改、删除，git都能够知道并且进行跟踪，如果有需要还能帮助还原到历史的某一个时刻（commit）

- 前置步骤：创建一个空的文件夹，再通过下面命令行进行初始化
```git
git init
```
> 文件夹被git初始化后目录中会出现个 .git 目录，这个目录就是git用来跟踪管理版本库
的。（隐藏目录哦，作为攻城狮的你应该知道怎么看）




## 文件操作

### 将文件添加到版本库中

```git
// 将file添加到暂存区，可以提交多个文件，用空格分割文件名即可
git add file_name

// 将工作区所有的文件提交到暂存区
git add . 
```

```git
// 将暂存区中的文件提交到版本库，通常说明要言简意赅的描述出本次改动内容
git commit -m "提交说明" 
```

### 文件回退
```git
// 展示从最早到最近的所有提交 后面加参数--pretty=oneline 能使展示的数据更简洁
git log 
```
> 展示的内容大概就是commit id（版本号） 以及操作操作记录

```git
// 这是回到上一个版本，^^就是回到上上个版本，回到一千前个版本就是一千个^
git reset hard HEAD^ 
// 可以通过版本号进行回滚和“冲向未来”（回滚后后悔了通过这个还原） 
git reset hard 5d20215955 
// 值得一提的是 版本号不需要写全git会自动帮你找，不过多写一点比较稳妥

// 记录了我们每一次的操作
git reflog 
```
> reset 命令的更细节
> git reset [--soft] [--mixed] [--hard] [HEAD]
> -- mixed为默认，可以不用带该参数，用户重置暂存区的文件与上一次提交保持一次，工作区文件内容不变


### 文件删除

```git
git rm file // 删除一个文件 提交后版本库中文件也删除  会丢失工作区中的内容 不会丢弃版本库中的内容
```

### 其它

```git
git status // 查看文件状态 有待提交，待推送等
```
> git status 详细：
> - Changes to be commit    已经从工作区提交到暂存区了，可以通过git restore --stange fileName 命令将该文件从暂存区中移出到工作区
> - Changes not staged for commit 工作区和暂存区中都存在的文件 可以通过git add filaName 将文件加入到暂存区 
```git
git diff HEAD -- file // 查看工作区和版本库中最新版本 file的区别
git checkout -- file // 撤销file在工作区中的修改 
```
## 远程仓库操作
添加远程仓库的操作自行百度，不难。比如github就是找到地方点点点就ojbk了。以下只介绍有关git的操作
> 简单介绍有关步骤
> 创建好远程仓库后，一般会给出很多种地址，包括https和ssh等
> 需要注意的是，建好远程仓库后你不能直接进行推送和拉取（down zip除外），需要添加自己的公钥和私钥 具体自行百度
> ```git
> ssh-keygen -t rsa -C "email@xx.xxx"  // 生成私钥和公钥命令
> ```
> 生成后将公钥添加到远程仓库管理的key即可
```git
/**
 * 当创建好了远程仓库后，可以使用本地的版本库与之关联，也可以直接拉取后构建自己的项目
 * 关联一个远程库时必须给远程库指定一个名字，origin是默认习惯命名；
 */
git remote add origin url.git // 在本地仓库目录下执行命令，与对应的url git远程仓库关联
git push -u origin master // 第一次推送本地所有内容
git push origin master // 每次提交后都需要推送

git clone url.git // 克隆仓库到本地版本库，有很多协议可用，但是ssh更快哦
```

## 分支操作
### 分支查看
```git
git branch // 查看本地分支
git branch -a // 查看本地和远程所有分支
git branch -r // 查看远程分支
git remote update -p // 刷新远程分支
```
### 创建分支
```git
git branch name // 创建分支
git checkout name || git switch name // 切换分支
git checkout -b name || git switch -c name // 创建并切换分支 

git push origin name // 推送本地分支到远程
```

### 删除分支
```git
git branch -d name // 删除分支
```

### 合并操作
```git
// 用带参数的git log可以查看分支的合并情况  
// ps ： 用git log --graph 查看分支合并图
git log --graph --pretty=oneline --abbrev-commit

git merge branchName // 合并分支， 一般情况想使用的是fast Forward 模式合并，该模式下删除分支后会丢失分支数据
git merge --no-ff -m "xxx" branchName // 禁止fast Forward 的模式合并分支，会生成一个新的提交 xxx为新提交的备注内容
```

## 标签操作

> 标签是版本库的快照

### 查看标签
```git 
git tag // 查看所有标签
git show tagName // 查看对应标签信息
```
### 新增标签
```git
git tag v1.0 // 打标签
// 创建的标签在本地 如果要推送到远程
git push origin tagName // 推送标签到远程
```
### 删除标签
```git
git tag -d v1.0 // 删除标签
// 本地标签删除即删除了，如果该标签已推送到远程，删除本地标签后 执行以下命令可删除远程标签
git push origin :refs/tag/v1.0
```



## 其他细节操作
```git
git config --global alias.别名 命令  // 给命令设置别名
git commit --amend --no-edit // 给commit重新生成commit id
```
