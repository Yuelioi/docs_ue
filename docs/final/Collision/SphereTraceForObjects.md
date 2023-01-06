# SphereTraceForObjects

沿着给定的线扫过一个球体，并返回遇到的第一个目标。这只找到由ObjectTypes指定类型的对象。

目标是Kismet系统库

## 图示

![]($-20221218-18195715.png)

## Inputs

在。执行。

开始。矢量。线段的起点。

结束。向量。线段的终点。

半径。Float（单精度）。要扫描的球体的半径。

对象类型。EObjectTypeQuery枚举的数组。要追踪的对象类型数组。

Trace Complex：布尔值。真来测试复杂碰撞，假来测试简化碰撞。

忽略的行为者。演员对象引用数组。

绘制调试类型。EDrawDebugTrace 枚举。

忽略自我：布尔值。

追踪颜色：线性颜色结构。

Trace Hit Color: 线性颜色结构。

绘制时间。浮点数（单精度）。 

## Outputs

输出。Exec.

Out Hit: 命中结果结构。追踪命中的属性。

返回值。布尔值。如果有一个命中，则为真，否则为假。

Sweeps a sphere along the given line and returns the first hit encountered.. This only finds objects that are of a type specified by ObjectTypes.

Target is Kismet System Library

## 图示

![]($-20221218-18195715.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Radius: Float (single-precision). Radius of the sphere to sweep.

Object Types: Array of EObjectTypeQuery Enums. Array of Object Types to trace.

Trace Complex: Boolean. True to test against complex collision, false to test against simplified collision..

Actors to Ignore: Array of Actor Object References.

Draw Debug Type: EDrawDebugTrace Enum.

Ignore Self: Boolean.

Trace Color: Linear Color Structure.

Trace Hit Color: Linear Color Structure.

Draw Time: Float (single-precision).  

## Outputs

Out: Exec.

Out Hit: Hit Result Structure. Properties of the trace hit..

Return Value: Boolean. True if there was a hit, false otherwise..

