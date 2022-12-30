# GetBeamSourcePoint

获取光束源点

目标是粒子系统组件

## 图示

![]($-20221218-18543102.png)

## Inputs

目标。粒子系统组件对象参考。

发射器索引。整数。要获取的发射器的索引。

来源索引。整数。要获得发射器内的哪个光束。

## Outputs

输出源点。向量。源点的值。

true EmitterIndex和SourceIndex有效 - OutSourcePoint有效 false EmitterIndex或SourceIndex无效 - OutSourcePoint无效。