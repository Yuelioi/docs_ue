# DistanceMatchtoTarget

将序列评估器的时间设置为动画中距离曲线与输入的DistanceToTarget匹配的点。一个常见的用例是通过每一帧选择动画中与角色停止前剩余距离相匹配的点来实现无脚滑的停止。请注意，因为这个技术是通过剩余距离来设置动画时间的，所以它不尊重任何先前动画的相位（例如来自慢跑循环）。

目标是Anim Distance Matching Library

## 图示

![]($-20221218-18431501.png)

## Inputs

在。执行。

序列评估器。序列评估器参考结构（通过参考）。序列评估器的节点来操作。

与目标的距离。浮点（单精度）。到目标的剩余距离（例如，一个停止点或支点）。

距离曲线的名称。名称。我们要匹配的曲线的名称。  

## Outputs

出：执行。

返回值。序列评估器 参考结构。

Set the time of the sequence evaluator to the point in the animation where the distance curve matches the DistanceToTarget input.. A common use case is to achieve stops without foot sliding by, each frame, selecting the point in the animation that matches the distance the character has remaining until it stops.. Note that because this technique sets the time of the animation by distance remaining, it doesn't respect phase of any previous animation (e.g. from a jog cycle).

Target is Anim Distance Matching Library

## 图示

![]($-20221218-18431501.png)

## Inputs

In: Exec.

Sequence Evaluator: Sequence Evaluator Reference Structure (by ref). The sequence evaluator node to operate on..

Distance to Target: Float (single-precision). The distance remaining to a target (e.g. a stop or pivot point)..

Distance Curve Name: Name. Name of the curve we want to match.  

## Outputs

Out: Exec.

Return Value: Sequence Evaluator Reference Structure.

