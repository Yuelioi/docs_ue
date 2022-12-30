# OnDuplicated

应该被调用以在复制后清除状态和用户数据，这样作业就会保持唯一性，不会从被复制的作业中获取ID或其他不需要的行为。

对于C++的实现，覆盖虚拟的bool OnDuplicated_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True)。 def on_duplicated(self):

目标是电影管道执行人工作

## 图示

![]($-20221218-20092859.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。  

## Outputs

出：执行。
