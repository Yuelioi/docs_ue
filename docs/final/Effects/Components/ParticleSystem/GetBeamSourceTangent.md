# GetBeamSourceTangent

获取光束源的切线

目标是粒子系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18543364.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

来源索引。整数。要获得发射器内的哪个光束。

## Outputs

出切点。矢量。源切线的值。

true EmitterIndex 和 SourceIndex 有效 - OutTangentPoint 有效 false EmitterIndex 或 SourceIndex 无效 - OutTangentPoint 无效。

<hr>

Get the beam source tangent

Target is Particle System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18543364.png)

## Inputs

Target: Particle System Component Object Reference.

Emitter Index: Integer. The index of the emitter to get.

Source Index: Integer. Which beam within the emitter to get.

## Outputs

Out Tangent Point: Vector. Value of source tangent.

Return Value: Boolean. true EmitterIndex and SourceIndex are valid - OutTangentPoint is valid false EmitterIndex or SourceIndex is invalid - OutTangentPoint is invalid.
