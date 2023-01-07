# OnExecutorFinishedImpl

当执行器完成了它被要求执行的所有事情时，应该调用这个。在失败的情况下，也应该调用这个，成功时传入 false，以便让调用者知道失败。错误应该在错误委托上广播，所以这只是一个方便的方法，可以在最后知道，而不需要自己去跟踪它。

目标是电影管道执行者基地

## 图示

![](/uploads/projects/ue-bluprint/20221218-20093267.png)

## Inputs

在。执行。

目标。电影管道执行器基础对象参考。

## Outputs

出：执行。

<hr>

This should be called when the Executor has finished executing all of the things. it has been asked to execute. This should be called in the event of a failure as. well, and passing in false for success to allow the caller to know failure. Errors. should be broadcast on the error delegate, so this is just a handy way to know at. the end without having to track it yourself.

Target is Movie Pipeline Executor Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-20093267.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Base Object Reference.

## Outputs

Out: Exec.
