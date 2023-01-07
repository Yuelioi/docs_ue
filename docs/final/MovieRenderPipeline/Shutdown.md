# Shutdown

放弃该电影管道上的任何未来工作，并通过关闭流程运行，以确保已经完成的工作被写入磁盘。这是一个阻塞性操作，在所有未完成的工作完成之前不会返回。

目标是电影管道

## 图示

![](/uploads/projects/ue-bluprint/20221218-20101053.png)

## Inputs

在。执行。

目标。电影管道对象参考。

错误。布尔值。是否因错误而提前关闭 此函数只能从游戏线程中调用。

## Outputs

出：执行。

<hr>

Abandons any future work on this Movie Pipeline and runs through the shutdown flow to ensure already. completed work is written to disk. This is a blocking-operation and will not return until all outstanding. work has been completed.

Target is Movie Pipeline

## 图示

![](/uploads/projects/ue-bluprint/20221218-20101053.png)

## Inputs

In: Exec.

Target: Movie Pipeline Object Reference.

Error: Boolean. Whether this is an early shut down due to an error This function should only be called from the game thread..

## Outputs

Out: Exec.
