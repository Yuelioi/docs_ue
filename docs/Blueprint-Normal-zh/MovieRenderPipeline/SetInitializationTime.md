# SetInitializationTime

覆盖此电影管道初始化的时间。这可以用于渲染农场，以确保所有机器上的工作都使用相同的日期/时间，而不是每个机器都在本地计算。

需要在::Initialize(...)之后调用。

目标是电影管道

## 图示

![]($-20221218-20095995.png)

## Inputs

在。执行。

目标。电影管道对象参考。

在日期时间。日期时间结构（通过引用）。为GetInitializationTime返回的DateTime对象。  

## Outputs

出：执行。
