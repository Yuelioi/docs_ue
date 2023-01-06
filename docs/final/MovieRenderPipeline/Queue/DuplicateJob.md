# DuplicateJob

复制特定的工作，并返回复制的内容。配置是重复的，不共享。

目标是电影管道队列

## 图示

![]($-20221218-20094374.png)

## Inputs

在。执行。

目标。电影管道队列对象参考。

在工作中。电影管道执行者工作对象参考。要寻找的工作，以复制...

## Outputs

出：执行。

返回值。电影管道执行器工作对象参考。复制的实例，如果不能复制，则为nullptr。

Duplicate the specific job and return the duplicate. Configurations are duplicated and not shared.

Target is Movie Pipeline Queue

## 图示

![]($-20221218-20094374.png)

## Inputs

In: Exec.

Target: Movie Pipeline Queue Object Reference.

In Job: Movie Pipeline Executor Job Object Reference. The job to look for to duplicate..  

## Outputs

Out: Exec.

Return Value: Movie Pipeline Executor Job Object Reference. The duplicated instance or nullptr if a duplicate could not be made..

