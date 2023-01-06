# AllocateNewJob

在这个队列中分配一个新的作业。为了内存管理的目的，队列拥有作业，而这将为你处理这个问题。

目标是电影管道队列

## 图示

![]($-20221218-20094026.png)

## Inputs

在。执行。

目标。电影管道队列对象参考。

在工作类型中。电影管道执行者作业类参考。指定应该创建的特定Job类型。自定义执行器可以使用自定义Job类型，以允许用户提供更多信息。  

## Outputs

出：执行。

返回值。电影管道执行者工作对象参考。创建的Executor工作实例。

Allocates a new Job in this Queue. The Queue owns the jobs for memory management purposes,. and this will handle that for you.

Target is Movie Pipeline Queue

## 图示

![]($-20221218-20094026.png)

## Inputs

In: Exec.

Target: Movie Pipeline Queue Object Reference.

In Job Type: Movie Pipeline Executor Job Class Reference. Specify the specific Job type that should be created. Custom Executors can use custom Job types to allow the user to provide more information..  

## Outputs

Out: Exec.

Return Value: Movie Pipeline Executor Job Object Reference. The created Executor job instance..

