# GetBeamTargetPoint

获取光束目标点

目标是粒子系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18543511.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

目标索引。整数。要获得发射器内的哪个光束。

## Outputs

输出目标点。矢量。目标点的值。

true EmitterIndex 和 TargetIndex 有效 - OutTargetPoint 有效 false EmitterIndex 或 TargetIndex 无效 - OutTargetPoint 无效。

<hr>

Get the beam target point

Target is Particle System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18543511.png)

## Inputs

Target: Particle System Component Object Reference.

Emitter Index: Integer. The index of the emitter to get.

Target Index: Integer. Which beam within the emitter to get.

## Outputs

Out Target Point: Vector. Value of target point.

Return Value: Boolean. true EmitterIndex and TargetIndex are valid - OutTargetPoint is valid false EmitterIndex or TargetIndex is invalid - OutTargetPoint is invalid.
