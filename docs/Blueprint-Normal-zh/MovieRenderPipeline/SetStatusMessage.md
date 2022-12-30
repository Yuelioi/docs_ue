# SetStatusMessage

将此作业的状态设置为给定值。如果progress.被设置为一个小于0的值，这将显示在用户界面上。如果进度>0，那么进度条将显示在用户界面上。进度和状态信息是外观的，取决于执行器的更新。类似于UMoviePipelineExecutor::SetStatusMessage函数，但在每项工作的基础上。

对于C++的实现，覆盖虚拟的void SetStatusMessage_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def set_status_message(self, inStatus):

目标是电影管道执行人工作

## 图示

![]($-20221218-20100707.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。

在状态。字符串。你希望执行者有的状态信息。

## Outputs

出：执行。
