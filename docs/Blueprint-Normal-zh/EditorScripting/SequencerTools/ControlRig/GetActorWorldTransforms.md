# GetActorWorldTransforms

在特定时间获得演员世界的转变

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522611.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。获取转换的活动序列。

演员。演员对象参考。该演员。

帧。帧数结构的数组。获得变换的次数。

时间单位。ESequenceTimeUnit枚举。帧值的单位，可以是显示率，也可以是tick分辨率。

## Outputs

出：执行。

返回值。变换的数组。返回世界变换。