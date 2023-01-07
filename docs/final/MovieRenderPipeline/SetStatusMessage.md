# SetStatusMessage

将此作业的状态设置为给定值。如果 progress.被设置为一个小于 0 的值，这将显示在用户界面上。如果进度>0，那么进度条将显示在用户界面上。进度和状态信息是外观的，取决于执行器的更新。类似于 UMoviePipelineExecutor::SetStatusMessage 函数，但在每项工作的基础上。

对于 C++的实现，覆盖虚拟的 void SetStatusMessage_Implementation() 覆盖 对于 Python/BP 的实现，覆盖。@unreal.ufunction(override=True). def set_status_message(self, inStatus):

目标是电影管道执行人工作

## 图示

![](/uploads/projects/ue-bluprint/20221218-20100707.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。

在状态。字符串。你希望执行者有的状态信息。

## Outputs

出：执行。

<hr>

Set the status of this job to the given value. This will be shown on the UI if progress. is set to a value less than zero. If progress is > 0 then the progress bar will be shown. on the UI instead. Progress and Status Message are cosmetic and dependent on the. executor to update. Similar to the UMoviePipelineExecutor::SetStatusMessage function,. but at a per-job level basis instead.

For C++ implementations override virtual void SetStatusMessage_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def set_status_message(self, inStatus):

Target is Movie Pipeline Executor Job

## 图示

![](/uploads/projects/ue-bluprint/20221218-20100707.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

In Status: String. The status message you wish the executor to have..

## Outputs

Out: Exec.
