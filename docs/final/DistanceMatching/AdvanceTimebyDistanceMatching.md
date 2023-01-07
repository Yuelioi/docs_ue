# AdvanceTimebyDistanceMatching

通过移动的距离而不是时间向前推进序列评估器。动画上需要有一条距离曲线，该曲线描述了动画中根骨所走的距离。参见 UDistanceCurveModifier。

目标是 Anim Distance Matching Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18431387.png)

## Inputs

在。执行。

更新上下文。动画更新上下文结构（通过引用）。在动画节点函数中提供的更新上下文。

序列评估器。序列评估器参考结构（通过参考）。序列评估器的节点来操作。

行进的距离。Float（单精度）。角色自上次动画更新后所走过的距离。

距离曲线的名称。名称。我们要匹配的曲线的名称。

播放率钳制。矢量二维结构。对距离匹配后的动画的有效播放率的钳制。设置为(0,0)表示没有钳制。

## Outputs

出：执行。

返回值。序列评估器 参考结构。

<hr>

Advance the sequence evaluator forward by distance traveled rather than time. A distance curve is required on the animation that. describes the distance traveled by the root bone in the animation. See UDistanceCurveModifier.

Target is Anim Distance Matching Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18431387.png)

## Inputs

In: Exec.

Update Context: Anim Update Context Structure (by ref). The update context provided in the anim node function..

Sequence Evaluator: Sequence Evaluator Reference Structure (by ref). The sequence evaluator node to operate on..

Distance Traveled: Float (single-precision). The distance traveled by the character since the last animation update..

Distance Curve Name: Name. Name of the curve we want to match.

Play Rate Clamp: Vector 2D Structure. A clamp on the effective play rate of the animation after distance matching. Set to (0,0) for no clamping..

## Outputs

Out: Exec.

Return Value: Sequence Evaluator Reference Structure.
