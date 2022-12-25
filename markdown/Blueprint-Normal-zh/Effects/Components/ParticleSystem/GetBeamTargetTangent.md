# GetBeamTargetTangent

获得光束目标的切线

目标是粒子系统组件

## 图示

![]($-20221218-18543781.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

目标索引。整数。要获得发射器内的哪个光束。

## Outputs

出切点。矢量。目标切线的值。

true EmitterIndex和TargetIndex有效 - OutTangentPoint有效 false EmitterIndex或TargetIndex无效 - OutTangentPoint无效。