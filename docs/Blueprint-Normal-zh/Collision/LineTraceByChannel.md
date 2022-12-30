# LineTraceByChannel

沿着给定的线路进行碰撞追踪，并返回遇到的第一个阻断撞击。该跟踪找到响应给定TraceChannel的对象。

目标是Kismet系统库

## 图示

![]($-20221218-18191587.png)

## Inputs

在。执行。

开始。向量。线段的起点。

结束。向量。线段的终点。

追踪通道。ETraceTypeQuery枚举。

Trace Complex：布尔值。真，测试复杂碰撞，假，测试简化碰撞。

Actors to Ignore（忽略的演员）。演员对象引用数组。

绘图调试类型。EDrawDebugTrace 枚举。

忽略自我：布尔值。

追踪颜色：线性颜色结构。

Trace Hit Color: 线性颜色结构。

绘制时间。浮点数（单精度）。 

## Outputs

输出。Exec.

Out Hit: 命中结果结构。追踪命中的属性。

返回值。布尔值。如果有一个命中，则为真，否则为假。
