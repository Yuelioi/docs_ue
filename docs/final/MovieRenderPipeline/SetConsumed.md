# SetConsumed

将作业设置为被消耗。被消耗的作业在用户界面中被禁用，不应再次提交进行渲染。这允许将作业添加到队列中，将队列提交到远程农场（消耗作业），然后再添加更多的作业，第二次提交到农场不会重新提交已经在进行的作业。

渲染完成后，作业可以不被占用，以重新启用编辑。

对于C++的实现，覆盖虚拟的void SetConsumed_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def set_consumed(self, isConsumed):

目标是电影管道执行人工作

## 图示

![]($-20221218-20095875.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。

在消耗的。布尔值。如果作业应该被消耗，并且在用户界面中禁止编辑，则为真。  

## Outputs

出：执行。

Set the job to be consumed. A consumed job is disabled in the UI and should not be. submitted for rendering again. This allows jobs to be added to a queue, the queue. submitted to a remote farm (consume the jobs) and then more jobs to be added and. the second submission to the farm won't re-submit the already in-progress jobs.

Jobs can be unconsumed when the render finishes to re-enable editing.

For C++ implementations override virtual void SetConsumed_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def set_consumed(self, isConsumed):

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20095875.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

In Consumed: Boolean. True if the job should be consumed and disabled for editing in the UI..  

## Outputs

Out: Exec.

