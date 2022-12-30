# IsConsumed

获取该作业是否被标记为已消耗。已消耗的作业在用户界面中是不可编辑的，并且不应提交渲染，因为它要么已经完成，要么已经在进行中。

对于C++的实现，覆盖虚拟 bool IsConsumed_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def is_consumed(self):. return ?

目标是电影管道执行人工作

## 图示

![]($-20221218-20092167.png)

## Inputs

目标。电影管道执行者工作对象参考。  

## Outputs

返回值。布尔值。获取该作业是否被标记为已消耗。一个被消耗的作业在用户界面中是不可编辑的，并且不应该提交渲染，因为它要么已经完成，要么已经在进行中。对于C++实现，覆盖 virtual bool IsConsumed_Implementation() 覆盖 对于Python/BP实现，覆盖。@unreal.ufunction(override=True). def is_consumed(self):. return ?
