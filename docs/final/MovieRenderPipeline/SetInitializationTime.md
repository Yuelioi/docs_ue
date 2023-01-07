# SetInitializationTime

覆盖此电影管道初始化的时间。这可以用于渲染农场，以确保所有机器上的工作都使用相同的日期/时间，而不是每个机器都在本地计算。

需要在::Initialize(...)之后调用。

目标是电影管道

## 图示

![](/uploads/projects/ue-bluprint/20221218-20095995.png)

## Inputs

在。执行。

目标。电影管道对象参考。

在日期时间。日期时间结构（通过引用）。为 GetInitializationTime 返回的 DateTime 对象。

## Outputs

出：执行。

<hr>

Override the time this movie pipeline was initialized at. This can be used for render farms. to ensure that jobs on all machines use the same date/time instead of each calculating it locally.

Needs to be called after ::Initialize(...)

Target is Movie Pipeline

## 图示

![](/uploads/projects/ue-bluprint/20221218-20095995.png)

## Inputs

In: Exec.

Target: Movie Pipeline Object Reference.

In Date Time: Date Time Structure (by ref). The DateTime object to return for GetInitializationTime..

## Outputs

Out: Exec.
