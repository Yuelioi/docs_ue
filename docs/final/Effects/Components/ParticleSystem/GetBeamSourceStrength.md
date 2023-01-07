# GetBeamSourceStrength

获取光束源强度

目标是粒子系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18543231.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

来源索引。整数。要获得发射器内的哪个光束。

## Outputs

输出源强度。Float（单精度）。源切线的值。

返回值。Boolean. true EmitterIndex 和 SourceIndex 是有效的 - OutSourceStrength 是有效的 false EmitterIndex 或 SourceIndex 是无效的 - OutSourceStrength 是无效的。

<hr>

Get the beam source strength

Target is Particle System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18543231.png)

## Inputs

Target: Particle System Component Object Reference.

Emitter Index: Integer. The index of the emitter to get.

Source Index: Integer. Which beam within the emitter to get.

## Outputs

Out Source Strength: Float (single-precision). Value of source tangent.

Return Value: Boolean. true EmitterIndex and SourceIndex are valid - OutSourceStrength is valid false EmitterIndex or SourceIndex is invalid - OutSourceStrength is invalid.
