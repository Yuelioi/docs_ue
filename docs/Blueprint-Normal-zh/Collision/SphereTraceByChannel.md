# SphereTraceByChannel

沿着给定的线扫过一个球体，并返回遇到的第一个阻断点。该跟踪找到响应给定TraceChannel的对象

目标是Kismet系统库

## 图示

![]($-20221218-18195361.png)

## Inputs

在。执行。

开始。向量。线段的起点。

结束。向量。线段的终点。

半径。Float（单精度）。要扫描的球体的半径。

追踪通道。ETraceTypeQuery枚举。

Trace Complex：布尔值。为真，测试复杂碰撞；为假，测试简化碰撞。

忽略的角色。演员对象引用数组。

绘图调试类型。EDrawDebugTrace 枚举。

忽略自我：布尔值。

追踪颜色：线性颜色结构。

Trace Hit Color: 线性颜色结构。

绘制时间。浮点数（单精度）。 

## Outputs

输出。Exec.

Out Hit: 命中结果结构。追踪命中的属性。

返回值。布尔值。如果有一个命中，则为真，否则为假。
