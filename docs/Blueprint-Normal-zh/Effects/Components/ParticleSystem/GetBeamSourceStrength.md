# GetBeamSourceStrength

获取光束源强度

目标是粒子系统组件

## 图示

![]($-20221218-18543231.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

来源索引。整数。要获得发射器内的哪个光束。

## Outputs

输出源强度。Float（单精度）。源切线的值。

返回值。Boolean. true EmitterIndex和SourceIndex是有效的 - OutSourceStrength是有效的 false EmitterIndex或SourceIndex是无效的 - OutSourceStrength是无效的。