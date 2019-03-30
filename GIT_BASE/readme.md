快照
git checkout mastre  回到主分支
git checkout branch1  回到branch1
git branch 查看当前处于哪分支
git checkout -b branch1 创建一个新的branch1分支
git reset --hard HEAD^ 返回上一次提交
git merge branch1  合并分支 缺点:提交历史显得太乱
git log --oneline --graph 
git rebase master  能产生一个更加干净的提交历史
===============================================
要得到更加干净的提交历史
先用git rebase master
再用git merge branch1
==============================================
变基:改变基点，即分叉点