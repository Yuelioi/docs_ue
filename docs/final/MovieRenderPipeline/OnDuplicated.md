# OnDuplicated

应该被调用以在复制后清除状态和用户数据，这样作业就会保持唯一性，不会从被复制的作业中获取 ID 或其他不需要的行为。

对于 C++的实现，覆盖虚拟的 bool OnDuplicated_Implementation() 覆盖 对于 Python/BP 的实现，覆盖。@unreal.ufunction(override=True)。 def on_duplicated(self):

目标是电影管道执行人工作

## 图示

![](/uploads/projects/ue-bluprint/20221218-20092859.png)

## Inputs

在。执行。

目标。电影管道执行者工作对象参考。

## Outputs

出：执行。

<hr>

Should be called to clear status and user data after duplication so that jobs stay. unique and don't pick up ids or other unwanted behavior from the pareant job.

For C++ implementations override virtual bool OnDuplicated_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def on_duplicated(self):

Target is Movie Pipeline Executor Job

## 图示

![](/uploads/projects/ue-bluprint/20221218-20092859.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

## Outputs

Out: Exec.
