# SetStatusProgress

将此作业的进度设置为给定值。如果提供了一个正值，用户界面将显示进度条，而一个负值将使用户界面显示.状态消息，而不是。进度和状态信息是外观上的，取决于.执行器的更新。类似于 UMoviePipelineExecutor::SetStatusProgress 函数，但在每项工作的基础上。

对于 C++的实现，覆盖虚拟的 void SetStatusProgress_Implementation() 覆盖 对于 Python/BP 的实现，覆盖。@unreal.ufunction(override=True). def set_status_progress(self, inProgress):

目标是电影管道执行人工作

## 图示

![](/uploads/projects/ue-bluprint/20221218-20100820.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。

正在进行中。Float（单精度）。执行器应该有的进度（0-1 范围）。

## Outputs

出：执行。

<hr>

Set the progress of this job to the given value. If a positive value is provided. the UI will show the progress bar, while a negative value will make the UI show the. status message instead. Progress and Status Message are cosmetic and dependent on the. executor to update. Similar to the UMoviePipelineExecutor::SetStatusProgress function,. but at a per-job level basis instead.

For C++ implementations override virtual void SetStatusProgress_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def set_status_progress(self, inProgress):

Target is Movie Pipeline Executor Job

## 图示

![](/uploads/projects/ue-bluprint/20221218-20100820.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

In Progress: Float (single-precision). The progress (0-1 range) the executor should have..

## Outputs

Out: Exec.
