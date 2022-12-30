# GetBeamTargetStrength

获取光束目标强度

目标是粒子系统组件

## 图示

![]($-20221218-18543647.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

目标索引。整数。要获得发射器内的哪个光束。

## Outputs

输出目标强度。Float（单精度）。目标切线的值。

true EmitterIndex和TargetIndex有效 - OutTargetStrength有效 false EmitterIndex或TargetIndex无效 - OutTargetStrength无效。