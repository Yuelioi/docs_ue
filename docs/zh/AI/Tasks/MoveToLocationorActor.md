# MoveToLocationorActor

AIMove To

目标是AIT任务移动到

## 图示

![]($-20221218-17484157.png)

## Inputs

在。执行。

控制器。AIController 对象参考。

目标位置。Vector（向量）。

Goal Actor: Actor对象参考。

接受半径。Float（单精度）。

重叠时停止。EAIOptionFlag Enum。

接受部分路径。EAIOptionFlag Enum。

使用寻路。Boolean.

锁定AILogic。布尔值。

Use Continuos Goal Tracking: 布尔值。

导航时的项目目标。EAIOptionFlag Enum.  

## Outputs

出场。Exec.

异步任务。AITask 移动到对象参考。

在请求失败时。执行。On Request Failed.

在移动完成后。执行。移动完毕。
