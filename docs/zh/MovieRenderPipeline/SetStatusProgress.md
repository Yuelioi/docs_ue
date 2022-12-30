# SetStatusProgress

将此作业的进度设置为给定值。如果提供了一个正值，用户界面将显示进度条，而一个负值将使用户界面显示.状态消息，而不是。进度和状态信息是外观上的，取决于.执行器的更新。类似于UMoviePipelineExecutor::SetStatusProgress函数，但在每项工作的基础上。

对于C++的实现，覆盖虚拟的void SetStatusProgress_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def set_status_progress(self, inProgress):

目标是电影管道执行人工作

## 图示

![]($-20221218-20100820.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。

正在进行中。Float（单精度）。执行器应该有的进度（0-1范围）。

## Outputs

出：执行。
