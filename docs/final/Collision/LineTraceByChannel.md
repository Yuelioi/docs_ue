# LineTraceByChannel

沿着给定的线路进行碰撞追踪，并返回遇到的第一个阻断撞击。该跟踪找到响应给定 TraceChannel 的对象。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18191587.png)

## Inputs

在。执行。

开始。向量。线段的起点。

结束。向量。线段的终点。

追踪通道。ETraceTypeQuery 枚举。

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

<hr>

Does a collision trace along the given line and returns the first blocking hit encountered.. This trace finds the objects that RESPONDS to the given TraceChannel

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18191587.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Trace Channel: ETraceTypeQuery Enum.

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
