# LineTraceByProfile

使用特定的剖面图对世界追踪射线，并返回第一个阻断命中的结果。

目标是Kismet系统库

## 图示

![]($-20221218-18191705.png)

## Inputs

在。执行。

开始。向量。线段的起点。

结束。向量。线段的终点。

外形名称。名称。用来决定打哪个组件的'轮廓'。

Trace Complex：布尔值。真来测试复杂碰撞，假来测试简化碰撞。

忽略的演员。演员对象参考数组。

绘制调试类型。EDrawDebugTrace 枚举。

忽略自我：布尔值。

追踪颜色：线性颜色结构。

Trace Hit Color: 线性颜色结构。

绘制时间。浮点数（单精度）。 

## Outputs

输出。Exec.

Out Hit: 命中结果结构。追踪命中的属性。

返回值。布尔值。如果有一个命中，则为真，否则为假。

Trace a ray against the world using a specific profile and return the first blocking hit

Target is Kismet System Library

## 图示

![]($-20221218-18191705.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Profile Name: Name. The 'profile' used to determine which components to hit.

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

